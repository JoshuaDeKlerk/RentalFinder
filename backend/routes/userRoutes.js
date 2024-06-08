import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import Favorite from '../models/Favorite.js';
import Booking from '../models/Booking.js';

const router = express.Router();

// Signup route
router.post('/signup', async (req, res) => {
  const { username, email, password, id, age } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, id, age });
    await newUser.save();
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created successfully', user: newUser, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Signin route
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'User signed in successfully', user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete user and associated data route
router.delete('/:id', async (req, res) => {
  try {
    const userId = req.params.id;

    // Delete user's bookings
    await Booking.deleteMany({ user: userId });

    // Delete user's favorites
    await Favorite.deleteMany({ user: userId });

    // Delete the user
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json({ message: 'User and associated data deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;

















