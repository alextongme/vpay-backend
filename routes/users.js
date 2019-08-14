const express = require('express');
const router = express.Router();
const { User } = require('../database/models');

router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
});

module.exports = router;
