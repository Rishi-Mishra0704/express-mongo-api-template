const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const router = require('./router');
const app = express();
const port = 3000;

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/myapi', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

// Check if MongoDB is connected successfully
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('MongoDB connected successfully');
});

// Middleware
app.use(cors()); // Enable CORS for all origins
app.use(bodyParser.json());

// Define your routes here

// Start the server
app.use('/api', router);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
