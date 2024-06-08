import express from 'express';
import Review from '../models/Review.js';

const router = express.Router();

router.get('/:productId', async (req, res) => {
  try {
    const reviews = await Review.find({ productId: req.params.productId }).populate('userId', 'username profilePicture');
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

router.post('/', async (req, res) => {
  const { productId, userId, rating, text } = req.body;
  try {
    const newReview = new Review({
      productId,
      userId,
      rating,
      text,
    });
    const savedReview = await newReview.save();
    const populatedReview = await Review.findById(savedReview._id).populate('userId', 'username profilePicture');
    res.status(201).json(populatedReview);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ message: 'Server error', error });
  }
});

export default router;




