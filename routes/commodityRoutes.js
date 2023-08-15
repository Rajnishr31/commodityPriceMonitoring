const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');
const commodityController = require('../controllers/commodityController');

const router = express.Router();

router.use(authMiddleware); // Protect routes with authentication

router.get('/', commodityController.getCommodities);
router.post('/', commodityController.addCommodity);

module.exports = router;
