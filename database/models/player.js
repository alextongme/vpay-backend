const Sequelize = require('sequelize');
const db = require('../db');

const Player = db.define("player", {

  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  }

});

module.exports = Player;
