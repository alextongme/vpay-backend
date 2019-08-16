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
      msg: 'username already in use!'
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
      msg: 'phone number already in use!'
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
      msg: 'email already in use!'
    }
  }

});

module.exports = User;