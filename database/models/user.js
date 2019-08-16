const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define("user", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  username : {
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Username Already In Use!'
    }
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  phoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: {
      args: true,
      msg: 'Phone Number Already In Use!'
    }
  },

  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false,
    unique: {
      args: true,
      msg: 'Email Already In Use!'
    }
  }

});

module.exports = User;