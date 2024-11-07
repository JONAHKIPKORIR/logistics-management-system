const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes'); // Import dashboard routes
const cors = require('cors'); // Import CORS middleware

dotenv.config();
const app = express();

const corsOptions = {
    origin: 'https://silver-broccoli-757gpxw7gpqfpvqq-3000.app.github.dev',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Allow cookies if necessary
};
app.use(cors(corsOptions));

// Middleware for CORS with specific origin
// app.use(cors({
//     origin: 'https://silver-broccoli-757gpxw7gpqfpvqq-3000.app.github.dev', // Your frontend's URL
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     credentials: true
// }));

// Other Middlewares
app.use(express.json());

// Connect to Database
connectDB();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/dashboard', dashboardRoutes); // Use dashboard routes

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
