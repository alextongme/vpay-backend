// Here, we can prepare to register our models, set up associations between tables, and generate a barrel file for the models;

const User = require('./user');
const Receipt = require('./receipt');
const Order = require('./order');

// Associations;
// Source.association(Target);

// O:M;
User.hasMany(Receipts); // A one-to-many relationship that adds the column titled "teamId" to the table of players;
Receipt.belongsTo(User); // A one-to-one relationship that adds the column titled "teamId" to the table of players;

// O:O;
Receipt.hasMany(Order); // A one-to-one relationship that adds the column titled "teamId" to the table of coaches;
Order.belongsTo(Receipt); // A one-to-one relationship that adds the column titled "teamId" to the table of coaches;

User.hasMany(Order);
Order.belongsTo(User);

// Game.belongsTo(Team, { as: 'HomeTeam', foreignKey: 'homeTeamId' });
// Game.belongsTo(Team, { as: 'AwayTeam', foreignKey: 'awayTeamId' });
// Team.hasMany(Game, { as: 'HomeGames', foreignKey: 'homeTeamId' });
// Team.hasMany(Game, { as: 'AwayGames', foreignKey: 'awayTeamId' });

module.exports = {
  User,
  Receipt,
  Order
};
