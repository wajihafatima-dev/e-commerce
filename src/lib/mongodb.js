import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log('Using existing database connection');
    return mongoose.connection.asPromise();
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI);
    console.log('Database connected');
    return db;
  } catch (error) {
    console.error('Database connection error:', error.message);
    throw new Error('Database connection failed');
  }
};

export default connectDB;