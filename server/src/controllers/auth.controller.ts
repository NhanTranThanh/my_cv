import { Request, Response, NextFunction } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import { AppError } from '../middleware/errorHandler';
import User from '../models/User.model';
import { generateAccessToken } from '../utils/jwt';

// @desc    Login user
// @route   POST /api/auth/login
// @access  Public
export const login = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;

  // Validate email
  if (!email) {
    return next(new AppError('Please provide an email', 400));
  }

  // Find user by email
  const user = await User.findOne({ email: email.toLowerCase() });

  if (!user) {
    return next(new AppError('Invalid credentials', 401));
  }

  // Generate JWT access token
  const token = generateAccessToken({
    id: user._id.toString(),
    email: user.email,
  });

  // Set token as HTTP-only cookie
  res.cookie('token', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // HTTPS only in production
    sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // 'none' for cross-origin in production, 'lax' for localhost
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    path: '/',
    // Don't set domain - let it default to the request origin
  });

  res.status(200).json({
    success: true,
    data: {
      id: user._id,
      email: user.email,
      token
    }
  });
});

