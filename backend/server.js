import dotenv from 'dotenv';
import express from 'express';
import connectDB from './config/database.js';

dotenv.config();

const app = express();

// Database connection
connectDB();

// Middleware
app.use(express.json());

// Routes
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});