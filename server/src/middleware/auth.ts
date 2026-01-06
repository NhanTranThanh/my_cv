import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from './asyncHandler';
import { AppError } from './errorHandler';
import { verifyAccessToken, JWTPayload } from '../utils/jwt';

// Extend Express Request to include user
export interface AuthRequest extends Request {
  user?: JWTPayload;
}

/**
 * JWT Authentication Middleware
 * Reads and verifies the token from HTTP-only cookie or Authorization Bearer token
 * Attaches the decoded user payload to req.user
 */
export const authenticate = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;
    console.log('cookies', req.cookies);

    // Check for token in HTTP-only cookie first
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }
    // Fallback to Authorization header
    else if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    // Make sure token exists
    if (!token) {
      return next(new AppError('Not authorized to access this route. No token provided.', 401));
    }

    try {
      // Verify token
      const decoded = verifyAccessToken(token);

      // Attach user payload to request object
      (req as AuthRequest).user = decoded;

      next();
    } catch (error) {
      // Handle token verification errors
      if (error instanceof Error) {
        if (error.message === 'Token has expired') {
          return next(new AppError('Token has expired', 401));
        } else if (error.message === 'Invalid token') {
          return next(new AppError('Invalid token', 401));
        }
      }
      return next(new AppError('Not authorized to access this route', 401));
    }
  }
);

