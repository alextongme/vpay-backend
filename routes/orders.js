const express = require('express');
const router = express.Router();
const { Order } = require('../database/models');

/* GETS */
// FIND ALL ORDERS
router.get('/', function(req, res, next) {
    Order.findAll()
      .then(orders => res.json(orders))
      .catch(next)
  });

// GET ALL ORDERS BY RECEIPT ID
router.get('/:receiptId', function(req, res, next) {
  Order.findAll({
      where: {receiptId: req.params.receiptId}
    })
    .then(orders => res.json(orders))
    .catch(next)
});

// GET ALL ORDERS BY USER ID
router.get('/:userId', function(req, res, next) {
  Order.findAll({
      where: {userId: req.params.userId}
    })
    .then(orders => res.json(orders))
    .catch(next)
});

/* POSTS */
// CREATES A NEW ORDER
router.post('/', function(req, res, next) {
  const order = req.body;
  Order.create(order)
  .then(function(order) {
    res.json(order);
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

/* PUTS */
// MODIFY THE ORDER
router.put('/:id', function(req, res, next) {
  let modifiedOrder = req.body;
  let modified = Order.update(
    {
      "paid": modifiedOrder.paid
    }, 
    {
      where : {
        id : req.params.id
      }
    }).catch(error=>{console.log(error)});

    if(modified) {
      res.status(200).send(`Updated order with id# ${req.params.id}.`);
    }
    else {
      res.status(404).send(`Did not find order.`);
    }
});

module.exports = router;
