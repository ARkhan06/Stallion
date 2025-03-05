const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const bookingRoutes = require('./routes/bookingRoutes');

// CORS configuration that accepts requests from any origin in development
const corsOptions = {
  // In development: allow both localhost ports
  // In production: you would list your actual domains
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, Postman)
    if (!origin) {
      return callback(null, true);
    }

    const allowedOrigins = [
      'http://localhost:5173',  // Vite default
      'http://localhost:3000',  // Common React port
      'http://127.0.0.1:5173',
      'http://127.0.0.1:3000',
      'https://stallionsls.com',  // Add your domain
      'https://www.stallionsls.com'
      // Add more origins as needed
    ];

    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Accept',
    'Origin'
  ],
  exposedHeaders: ['Content-Range', 'X-Content-Range'],
  maxAge: 600 // Preflight results cache for 10 minutes
};

// Apply CORS middleware with options
app.use(cors(corsOptions));

// Additional middleware to ensure OPTIONS requests are handled correctly
app.options('*', cors(corsOptions));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', bookingRoutes);
const userAuth = require("./routes/userAuthRoute");
app.use("/auth", userAuth);

const user = require("./routes/userRoutes");
app.use("/user", user);

// Error handling middleware
app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    res.status(403).json({
      error: 'CORS Error',
      message: 'Origin not allowed'
    });
  } else {
    next(err);
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});