const Sequelize = require('sequelize');
const db = require('../db');

const Receipt = db.define("receipt", {

  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  tipPercent : {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  // fulfilled: {
  //   type: Sequelize.BOOLEAN,
  //   allowNull: false,
  //   defaultValue: false 
  // }

});

module.exports = Receipt;