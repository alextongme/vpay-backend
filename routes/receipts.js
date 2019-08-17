const express = require('express');
const router = express.Router();
const { Receipt } = require('../database/models');

router.get('/', function(req, res, next) {
    Receipt.findAll()
      .then(receipts => res.json(receipts))
      .catch(next)
  });

/*
get all by user id

 */

module.exports = router;
