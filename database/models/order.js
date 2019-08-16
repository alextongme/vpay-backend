const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define("order", {

  itemName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

});

module.exports = Order;