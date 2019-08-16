const express = require('express');
const router = express.Router();
const { User } = require('../database/models');

// FINDS ALL USERS
router.get('/', function(req, res, next) {
  User.findAll()
    .then(users => res.json(users))
    .catch(next)
});

// FINDS USER BY ID NUMBER
router.get('/:id', function(req, res, next) {
  User.findByPk(req.params.id, 
    {attributes: ['id', 'firstName', 'lastName', 'username']})
    .then(user => res.json(user))
    .catch(next)
});

// HANDLES LOGIN
router.put('/login', function(req, res, next) {
  User.findOne({
    where: {
      username: req.body.username,
      password: req.body.password
    },
    attributes: ['id', 'firstName', 'lastName', 'username']
    }).then(user =>
      {if(user == null) {
        res.status(404).send("Invalid username and/or password");
      }
      else {
        res.status(200).json(user);
      }
      })
      .catch(next)
});

// CREATES A NEW USER
router.post('/', function(req, res, next) {
  const user = req.body;
  let createdUser = User.create(user).catch(error =>{
    // console.log(error);
    res.send(error);
  });

  // if (createdUser) {
  //   res.status(202).send(createdUser)
  // }
  // else {
  //   res.status(404).send("User/email/phone already exists");
  // }
  
});


module.exports = router;
