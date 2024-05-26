import dotenv from 'dotenv';
dotenv.config();  // Make sure this is at the very top before other imports

import express from 'express';
import cors from 'cors';
import connectDB from './db/db.js';  // Note the .js extension

import userRoutes from './routes/userRoutes.js';  // Note the .js extension

const corsOptions = {
  origin: 'http://localhost:3000', // or your specific allowed domain
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware to parse JSON
app.use(express.json()); // For parsing application/json

// Apply CORS middleware globally if needed
app.use(cors(corsOptions));

app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});







