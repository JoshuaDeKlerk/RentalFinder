const express = require('express');
const mongoose = require('mongoose')
const dotenv = require('dotenv');

// Load enviroment variables from .env file
dotenv.config();

// Initialize express app
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) =>{
    res.send('Hello World');
});

// MongoDB connection
mongoose.connect('process.env.mongodb:/Enzo:enzo12345@localhost:3000/mydatabase', {
    userNewUrlParser: true,
    userUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// User routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

//Start the server
app.listen(PORT, () => {
    console,log('Server is running on port ${PORT}')
});