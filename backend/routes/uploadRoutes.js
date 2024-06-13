// backend/routes/uploadRoutes.js
import express from 'express';
import multer from 'multer';
import User from '../models/User.js';

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post('/upload-profile-picture', upload.single('profilePicture'), async (req, res) => {
  const { userId } = req.body;
  const profilePicture = req.file.path;

  try {
    const user = await User.findByIdAndUpdate(userId, { profilePicture }, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error uploading profile picture:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

export default router;

