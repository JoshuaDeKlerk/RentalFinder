import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.post('/login', async (req, res) => {
const { email, password } = req.body;

try{
    const user = await user.findOne({ email});
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password'});
    }


    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password'});
    }

    res.status(200).json({ message: 'login successful', user });
} catch (err) {
    res.status(500).json({ message: err.message});
}

});
export default router;


