const Sequelize = require('sequelize');
const db = require('../db');

const Receipt = db.define("receipt", {

  totalPrice: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  // API RETURNING WRONG STATES
  // state: {
  //   type: Sequelize.STRING,
  //   allowNull: false
  // },

  tipPercent : {
    type: Sequelize.INTEGER,
    allowNull: false
  }

});

module.exports = Receipt;