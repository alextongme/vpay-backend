const express = require('express');
const router = express.Router();
const { Receipt } = require('../database/models');
const { Order } = require('../database/models');

// GET ALL RECEIPTS
router.get('/', function(req, res, next) {
    Receipt.findAll({ include: [{
      model: Order
    }]})
      .then(receipts => res.json(receipts))
      .catch(next)
  });

// GET ALL RECEIPTS BY ID
router.get('/:userId', function(req, res, next) {
  Receipt.findAll(
    {where: {userId: req.params.userId},
    attributes: ['userId', 'totalPrice', 'tipPercent', 'id']
    }
    )
    .then(receipt => res.json(receipt))
    .catch(next)
});

// CREATES A NEW RECEIPT
router.post('/', function(req, res, next) {
  const receipt = req.body;
  Receipt.create(receipt)
  .then(function(receipt) {
    res.json(receipt);
  })
  .catch(function (err) {
    // respond with validation errors
    return res.status(422).send(err.errors[0].message);
  })
  .catch(function (err) {
    // every other error
    return res.status(400).send({
        message: err.message
    })
  })
});

/*
 - TO DO LIST -
Put
Delete
 */

module.exports = router;
