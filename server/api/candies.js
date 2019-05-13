const { Candy } = require('../db');
const router = require('express').Router();
// base path is '/api/candies/'
router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();
    res.json(candies);
  } catch (err) {
    next(err);
  }
})

module.exports = router;
