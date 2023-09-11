// db.ts

import mongoose, { ConnectOptions } from 'mongoose';

const connectToMongoDB = async () => {
  try {
    const options: ConnectOptions = {
     
    };

    await mongoose.connect(process.env.CONNECTION_URI, options);
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
    process.exit(1); 
  }
};

export default connectToMongoDB;
