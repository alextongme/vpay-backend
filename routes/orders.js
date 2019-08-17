const express = require('express');
const router = express.Router();
const { Order } = require('../database/models');

router.get('/', function(req, res, next) {
    Order.findAll()
      .then(orders => res.json(orders))
      .catch(next)
  });

/*
put
post
delete
get all by receipt id
get all by user id
 */
module.exports = router;
