const mongoose = require("mongoose");

const memeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    default: "No title",
  },
  url: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tag: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model('Meme', memeSchema);