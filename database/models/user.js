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
    unique: true
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  phoneNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true
  },

  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    },
    allowNull: false,
    unique: true
  }

});

module.exports = User;