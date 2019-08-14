const express = require('express');
const router = express.Router();
const { Order } = require('../database/models');

router.get('/', function(req, res, next) {
  Order.findAll()
    .then(orders => res.json(orders))
    .catch(next)
});

module.exports = router;
