import express from 'express';
import User from '../models/User.js'; // Note the .js extension

const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new user
router.post('/register', async (req, res) => {
    console.log("Attempting to save user:", req.body);
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
            idOrDriversLicense: req.body.idOrDriversLicense,
            age: req.body.age,
        });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        console.error("Error in user registration:", err);
        res.status(500).json({ message: 'Error adding user', error: err.message });
    }
});

// User sign-in
router.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User does not exist. Please sign up first.' });
        }
        if (user.password !== password) {
            return res.status(400).json({ message: 'Incorrect password.' });
        }
        if (!user.idOrDriversLicense) {
            return res.status(400).json({ message: 'ID or Driver’s License is required.' });
        }
        if (user.age < 18) {
            return res.status(400).json({ message: 'User must be over 18.' });
        }
        res.json({ message: 'Sign in successful', user });
    } catch (err) {
        console.error('Error signing in:', err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
});

export default router;





