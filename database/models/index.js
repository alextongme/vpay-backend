const User = require('./user');
const Receipt = require('./receipt');
const Order = require('./order');

User.hasMany(Receipt);
Receipt.belongsTo(User);

Receipt.hasMany(Order);
Order.belongsTo(Receipt);

User.hasMany(Order);
Order.belongsTo(User);

module.exports = {
  User,
  Receipt,
  Order
};
