// app.js
const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const sheetsRoutes = require('./routes/sheetsRoutes');

const app = express();

// Middleware for JSON parsing
app.use(express.json());

// API routes
app.use('/api', fileRoutes);
app.use('/api', sheetsRoutes);

// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

module.exports = app;
