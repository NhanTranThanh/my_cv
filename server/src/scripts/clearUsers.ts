import dotenv from 'dotenv';
import mongoose from 'mongoose';
import connectDB from '../config/database';
import User from '../models/User.model';

// Load environment variables
dotenv.config();

const clearUsers = async () => {
  try {
    // Connect to database
    await connectDB();
    
    console.log('🗑️  Starting to clear users...');
    
    // Get count before deletion
    const countBefore = await User.countDocuments();
    console.log(`📊 Found ${countBefore} users in database`);
    
    if (countBefore === 0) {
      console.log('ℹ️  No users to delete');
      await mongoose.connection.close();
      console.log('🔌 Database connection closed');
      process.exit(0);
      return;
    }
    
    // Delete all users
    const result = await User.deleteMany({});
    
    console.log(`✅ Successfully deleted ${result.deletedCount} users`);
    
    // Close database connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error clearing users:', error);
    process.exit(1);
  }
};

// Run the clear function
clearUsers();

