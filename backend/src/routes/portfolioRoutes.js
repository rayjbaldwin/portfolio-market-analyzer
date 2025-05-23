const express = require('express');
const {
  listPortfolios,
  getPortfolio,
  simulatePortfolio,
  createPortfolio,
  updatePortfolio,
  removeStock
} = require('../controllers/portfolioController');
const { authenticateToken } = require('../middleware/authMiddleware');

const router = express.Router();

router.use(authenticateToken);
router.get('/', listPortfolios);
router.post('/', createPortfolio);
router.get('/:id', getPortfolio);
router.put('/:id', updatePortfolio);
router.get('/:id/simulate', simulatePortfolio);
router.delete('/:id/stocks/:ticker', removeStock);

module.exports = router;
