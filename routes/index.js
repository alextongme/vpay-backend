const express = require('express');
const router = express.Router();
const cors = require('cors');

// Subrouters;
const usersRouter = require('./users');
const receiptsRouter = require('./receipts');
const ordersRouter = require('./orders');

// Mount our subrouters to assemble our apiRouter;
router.use(cors());
router.use('/users', usersRouter);
router.use('/receipts', receiptsRouter);
router.use('/orders', ordersRouter);

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Error handling middleware;
router.use((req, res, next) => {
  const error = new Error("Not Found, Please Check URL!");
  error.status = 404;
  next(error);
});

// ENABLE CORS?


// Export our apiRouter, so that it can be used by our main app in app.js;
module.exports = router;
