import { Router } from 'express';
import userRoutes from './user.routes';
import authRoutes from './auth.routes';
import { authenticate } from '../middleware/auth';

const router = Router();

// Auth routes (login) - public, no authentication required
router.use('/auth', authRoutes);

// Apply JWT authentication to all other API routes
router.use(authenticate);

// Protected routes
router.use('/users', userRoutes);

export default router;


