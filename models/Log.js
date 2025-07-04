const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Log = sequelize.define("Log", {
  timestamp: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  endpoint: DataTypes.STRING,
  metodo: DataTypes.STRING,
  estado: DataTypes.INTEGER,
  mensaje: DataTypes.STRING,
});

User.hasMany(Log);
Log.belongsTo(User);

module.exports = Log;
