// backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// Import routes
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import authRoutes from './routes/authRoutes.js';
import favoriteRoutes from './routes/favoriteRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// Define __dirname manually for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config(); // Load environment variables

const app = express();
app.use(cors()); // Enable Cross-Origin Resource Sharing (CORS)
app.use(express.json()); // Parse JSON bodies
app.use('/uploads', express.static('uploads')); // Serve static files from 'uploads' directory

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

if (!MONGO_URI) {
  console.error('MONGO_URI is not defined');
  process.exit(1); // Exit if no MongoDB URI is defined
}

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,  // This option is deprecated but left for backward compatibility
  useUnifiedTopology: true, // Deprecated in newer MongoDB versions, but still OK to include
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit process if connection fails
  });

// Define API routes
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/bookings', bookingRoutes);
app.use('/auth', authRoutes);
app.use('/favorites', favoriteRoutes);
app.use('/reviews', reviewRoutes);
app.use('/upload', uploadRoutes);

// Serve the React frontend in production
if (process.env.NODE_ENV === 'production') {
  // Serve the static files from the React app's build folder
  app.use(express.static(path.join(__dirname, '../rentalfinder/build')));

  // For any other routes, serve the React frontend (index.html)
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../rentalfinder', 'build', 'index.html'));
  });
}

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
