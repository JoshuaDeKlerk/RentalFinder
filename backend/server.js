// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import authRoutes from './routes/authRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config(); // Load environment variables from .env

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads')); // Serve static files from the 'uploads' directory

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is not defined');
  process.exit(1); // Exit if no MongoDB URI is defined
}

// Connect to MongoDB using the URI from the .env file
mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process if connection fails
  });

// Define routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/bookings', bookingRoutes);
app.use('/auth', authRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/reviews', reviewRoutes);
app.use('/upload', uploadRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
