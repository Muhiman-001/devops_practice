const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection string
const mongoURI = process.env.MONGODB_URI || 'mongodb://admin:password@mongodb:27017/mydatabase?authSource=admin';

// Connect to MongoDB
mongoose.connect(mongoURI)
  .then(() => {
    console.log('Successfully connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

// Middleware
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!!S' });
});

app.get('/api/newtwo', (req, res) => {
  res.json({ message: 'New Two' });
});

app.get('/api/newapi', (req, res) => {
  res.json({ message: 'New Hello, World!' });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
