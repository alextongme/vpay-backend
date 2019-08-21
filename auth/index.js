const express = require("express");
const router = express.Router();
const { User, Receipt, Order } = require("../database/models");

router.post("/login", async (req, res, next) => {
  
  try {
    const user = await User.findOne({ 
      where: { 
        username: req.body.username 
      },
      // attributes: ['id', 'firstName', 'lastName', 'username'],
      // include: 
      // [{ model: Receipt,
      //   include: [{ model: Order }]},
      // {model: Order}]
    })

    if (!user) {
      res.status(401).send("Wrong username and/or password");
    }
    else if (!user.correctPassword(req.body.password)) {
      res.status(401).send("Wrong username and/or password");
    }
    else {
      let foundUser = await User.findOne({ 
        where: { 
          username: req.body.username 
        },
        attributes: ['id', 'firstName', 'lastName', 'username'],
        include: 
        [{ model: Receipt,
          include: [{ model: Order }]},
        {model: Order}]
      })
      req.login(user, err => (err ? next(err) : res.json(foundUser)));
    }
  }

  catch (err) {
    next(err);
  }

});

router.post("/signup", async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    req.login(user, err => (err ? next(err) : res.json(user)));
  }
  catch (err) {
    if (err.name === "SequelizeUniqueConstraintError") {
      res.status(401).send("User already exists");
    }
    else {
      next(err);
    }
  }
});

router.post("/logout", (req, res) => {
  // console.log(req.logout());
  req.logout();
  req.session.destroy();
  res.clearCookie('connect.sid');
  // res.redirect("/");
 
});

router.get("/me", (req, res) => {
  res.json(req.user);
});

module.exports = router;