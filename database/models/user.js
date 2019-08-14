const Sequelize = require('sequelize');
const db = require('../db');

const user = db.define("user", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  user_id: {
    type: Sequelize.STRING,
    allowNull: false
  },

  username : {
    type: Sequelize.STRING,
    allowNull: false
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false
  },

  phone_number: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  friends_ids: {
    type: Sequelize.STRING,
    allowNull: false
  },

  receipt_id: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Coach;