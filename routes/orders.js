const express = require('express');
const router = express.Router();
const { Order } = require('../database/models');

router.get('/', function(req, res, next) {
  Order.findAll()
    .then(orders => res.json(orders))
    .catch(next)
});

router.get('/:id', function(req, res, next) {
  Order.findByPk(req.params.id)
    .then(order => res.json(order))
    .catch(next)
});

module.exports = router;
