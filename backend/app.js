
const express = require('express');
const fileRoutes = require('./routes/fileRoutes');
const sheetsRoutes = require('./routes/sheetsRoutes');
const cors = require('cors');
const path = require('path'); 
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));


// API routes
app.use('/api', fileRoutes);
app.use('/api', sheetsRoutes);

  // Handle all routes that don't match API routes
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
// Basic error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
});

module.exports = app;
