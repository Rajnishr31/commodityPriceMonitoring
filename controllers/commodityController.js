const Commodity = require('../models/Commodity');

exports.getCommodities = async (req, res) => {
  try {
    const commodities = await Commodity.find().sort('-timestamp');
    res.json(commodities);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.addCommodity = async (req, res) => {
  try {
    const { name, quality, location, price } = req.body;
    const commodity = new Commodity({ name, quality, location, price });
    await commodity.save();
    res.status(201).json({ message: 'Commodity added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
