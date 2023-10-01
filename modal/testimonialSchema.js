const mongoose = require('mongoose');

const testimonialSchema = new mongoose.Schema({
  text: String,
  author: String,
  firm: String,
  imageUrl: String,
});

module.exports = mongoose.model('Testimonial', testimonialSchema);
