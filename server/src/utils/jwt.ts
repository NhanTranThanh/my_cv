import jwt from 'jsonwebtoken';

// JWT payload interface
export interface JWTPayload {
  id: string;
  email?: string;
  [key: string]: any;
}

// JWT options interface
export interface JWTOptions {
  expiresIn?: string | number;
  issuer?: string;
  audience?: string;
  [key: string]: any;
}

/**
 * Generate a JWT access token
 * @param payload - The data to encode in the token (typically user id and email)
 * @param options - Optional JWT options (expiresIn, issuer, audience, etc.)
 * @returns The signed JWT token string
 */
export const generateAccessToken = (
  payload: JWTPayload,
  options?: JWTOptions
): string => {
  const secret = process.env.JWT_SECRET || 'fallback-secret';
  const defaultExpiresIn = process.env.JWT_EXPIRE || '30d';

  const tokenOptions: jwt.SignOptions = {
    expiresIn: options?.expiresIn || defaultExpiresIn,
    ...(options?.issuer && { issuer: options.issuer }),
    ...(options?.audience && { audience: options.audience }),
  };

  // Remove undefined values from options
  Object.keys(tokenOptions).forEach((key) => {
    if (tokenOptions[key as keyof jwt.SignOptions] === undefined) {
      delete tokenOptions[key as keyof jwt.SignOptions];
    }
  });

  return jwt.sign(payload, secret, tokenOptions);
};

/**
 * Verify a JWT access token
 * @param token - The JWT token string to verify
 * @param options - Optional verification options (issuer, audience, etc.)
 * @returns The decoded token payload if valid
 * @throws Error if token is invalid, expired, or malformed
 */
export const verifyAccessToken = (
  token: string,
  options?: jwt.VerifyOptions
): JWTPayload => {
  const secret = process.env.JWT_SECRET || 'fallback-secret';

  try {
    const decoded = jwt.verify(token, secret, options) as JWTPayload;
    return decoded;
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      throw new Error('Token has expired');
    } else if (error instanceof jwt.JsonWebTokenError) {
      throw new Error('Invalid token');
    } else if (error instanceof jwt.NotBeforeError) {
      throw new Error('Token not active yet');
    } else {
      throw new Error('Token verification failed');
    }
  }
};

/**
 * Decode a JWT token without verification (useful for debugging)
 * @param token - The JWT token string to decode
 * @returns The decoded token payload (not verified)
 */
export const decodeAccessToken = (token: string): JWTPayload | null => {
  try {
    return jwt.decode(token) as JWTPayload | null;
  } catch (error) {
    return null;
  }
};

/**
 * Get the expiration time of a token without verifying it
 * @param token - The JWT token string
 * @returns The expiration date or null if token is invalid
 */
export const getTokenExpiration = (token: string): Date | null => {
  const decoded = decodeAccessToken(token);
  if (!decoded || !decoded.exp) {
    return null;
  }
  return new Date(decoded.exp * 1000);
};

/**
 * Check if a token is expired (without verification)
 * @param token - The JWT token string
 * @returns True if token is expired, false otherwise
 */
export const isTokenExpired = (token: string): boolean => {
  const expiration = getTokenExpiration(token);
  if (!expiration) {
    return true;
  }
  return expiration < new Date();
};

