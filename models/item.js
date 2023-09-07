const mongoose = require('mongoose');

// Define a schema
const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
});

// Create a model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
