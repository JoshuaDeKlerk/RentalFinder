// backend/routes/favoriteRoutes.js
import express from 'express';
import User from '../models/User.js';
import Product from '../models/Product.js';

const router = express.Router();

// Add to favorites
router.post('/add', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    if (!user.favorites.includes(productId)) {
      user.favorites.push(productId);
      await user.save();
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error adding to favorites', error: err.message });
  }
});

// Remove from favorites
router.post('/remove', async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.favorites = user.favorites.filter(fav => fav.toString() !== productId);
    await user.save();

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Error removing from favorites', error: err.message });
  }
});

// Get favorite products
router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await User.findById(userId).populate('favorites');
    if (!user) return res.status(404).json({ message: 'User not found' });

    const favoriteProducts = await Product.find({ _id: { $in: user.favorites } });
    res.status(200).json(favoriteProducts);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching favorite products', error: err.message });
  }
});

export default router;







