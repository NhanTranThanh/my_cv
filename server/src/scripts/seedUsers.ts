import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import connectDB from '../config/database';
import User from '../models/User.model';

// Load environment variables
dotenv.config();

const firstNames = [
  'Emma', 'Liam', 'Olivia', 'Noah', 'Ava', 'Ethan', 'Sophia', 'Mason',
  'Isabella', 'James', 'Mia', 'Benjamin', 'Charlotte', 'Lucas', 'Amelia',
  'Henry', 'Harper', 'Alexander', 'Evelyn', 'Michael', 'Abigail', 'Daniel',
  'Emily', 'Matthew', 'Elizabeth', 'Joseph', 'Sofia', 'David', 'Avery',
  'Jackson', 'Scarlett', 'Sebastian', 'Victoria', 'Carter', 'Aria', 'Wyatt'
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller',
  'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Wilson',
  'Anderson', 'Thomas', 'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee',
  'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis',
  'Robinson', 'Walker', 'Young', 'Allen', 'King', 'Wright', 'Scott',
  'Torres', 'Nguyen', 'Hill', 'Flores', 'Green', 'Adams'
];

const domains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com', 'example.com'];

const getRandomElement = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateRandomUser = async (index: number) => {
  const firstName = getRandomElement(firstNames);
  const lastName = getRandomElement(lastNames);
  const domain = getRandomElement(domains);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}.${Date.now()}.${index}@${domain}`;
  const password = 'password123'; // Default password for seeded users
  const hashedPassword = await bcrypt.hash(password, 10);
  const role = index === 0 ? 'admin' : 'user'; // First user is admin, rest are users
  
  return {
    email,
    password: hashedPassword,
    role,
    isActive: true
  };
};

const seedUsers = async () => {
  try {
    // Connect to database
    await connectDB();
    
    console.log('🌱 Starting to seed users...');
    
    // Generate 10 random users
    const userPromises = Array.from({ length: 10 }, (_, index) => generateRandomUser(index));
    const users = await Promise.all(userPromises);
    
    // Insert users into database
    const createdUsers = await User.insertMany(users);
    
    console.log(`✅ Successfully created ${createdUsers.length} users:`);
    createdUsers.forEach((user, index) => {
      console.log(`  ${index + 1}. ${user.email} - Role: ${user.role} - Active: ${user.isActive}`);
    });
    
    console.log('\n📝 Note: All users have the default password: password123');
    
    // Close database connection
    await mongoose.connection.close();
    console.log('🔌 Database connection closed');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error seeding users:', error);
    process.exit(1);
  }
};

// Run the seed function
seedUsers();

