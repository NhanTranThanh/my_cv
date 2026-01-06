# Express.js + MongoDB Template

A production-ready Express.js backend template with MongoDB integration, TypeScript, and best practices.

## Features

- ✅ Express.js with TypeScript
- ✅ MongoDB with Mongoose
- ✅ Error handling middleware
- ✅ Async/await error wrapper
- ✅ Environment variables configuration
- ✅ CORS enabled
- ✅ Request logging with Morgan
- ✅ RESTful API structure
- ✅ Graceful shutdown handling

## Project Structure

```
server/
├── src/
│   ├── config/
│   │   └── database.ts          # MongoDB connection
│   ├── controllers/
│   │   └── user.controller.ts   # Example controller
│   ├── middleware/
│   │   ├── asyncHandler.ts      # Async error wrapper
│   │   └── errorHandler.ts      # Error handling middleware
│   ├── models/
│   │   └── User.model.ts        # Example Mongoose model
│   ├── routes/
│   │   ├── index.ts             # Route aggregator
│   │   └── user.routes.ts       # Example routes
│   ├── app.ts                   # Express app configuration
│   └── server.ts                # Server entry point
├── .env.example                 # Environment variables template
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your configuration:
```env
PORT=3000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/myapp
```

### Running the Server

**Development mode (with hot reload):**
```bash
npm run dev
```

**Production mode:**
```bash
npm run build
npm start
```

The server will start on `http://localhost:3000` (or the port specified in your `.env` file).

## API Endpoints

### Health Check
- `GET /health` - Server health check

### Users (Example)
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get user by ID
- `POST /api/users` - Create a new user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Example Request

**Create a user:**
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "age": 30
  }'
```

**Get all users:**
```bash
curl http://localhost:3000/api/users
```

## MongoDB Connection

### Local MongoDB
Make sure MongoDB is running locally:
```bash
mongod
```

Then use:
```env
MONGODB_URI=mongodb://localhost:27017/myapp
```

### MongoDB Atlas
Use your Atlas connection string:
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```

## Adding New Features

### Create a New Model

1. Create a model file in `src/models/`:
```typescript
import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
  name: string;
  price: number;
}

const ProductSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  price: { type: Number, required: true }
}, { timestamps: true });

export default mongoose.model<IProduct>('Product', ProductSchema);
```

### Create a New Controller

1. Create a controller file in `src/controllers/`:
```typescript
import { Request, Response } from 'express';
import { asyncHandler } from '../middleware/asyncHandler';
import Product from '../models/Product.model';

export const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const products = await Product.find();
  res.status(200).json({ success: true, data: products });
});
```

### Create New Routes

1. Create a route file in `src/routes/`:
```typescript
import { Router } from 'express';
import { getProducts } from '../controllers/product.controller';

const router = Router();
router.route('/').get(getProducts);

export default router;
```

2. Add to `src/routes/index.ts`:
```typescript
import productRoutes from './product.routes';
router.use('/products', productRoutes);
```

## Error Handling

The template includes a custom error handler. Use `AppError` for throwing errors:

```typescript
import { AppError } from '../middleware/errorHandler';

throw new AppError('Resource not found', 404);
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Remove build directory

## License

ISC


