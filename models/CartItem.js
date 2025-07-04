const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");
const Product = require("./Product");

const CartItem = sequelize.define("CartItem", {
  cantidad: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
    allowNull: false,
  },
});

User.hasMany(CartItem);
CartItem.belongsTo(User);

Product.hasMany(CartItem);
CartItem.belongsTo(Product);

module.exports = CartItem;
