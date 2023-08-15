const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commoditySchema = new Schema({
  name: { type: String, required: true },
  quality: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Commodity', commoditySchema);
