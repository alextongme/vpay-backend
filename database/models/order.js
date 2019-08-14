const Sequelize = require('sequelize');
const db = require('../db');

const order = db.define("order", {

  Price: {
    type: Sequelize.INTEGER,
    allowNull: false
  }

});

module.exports = Coach;