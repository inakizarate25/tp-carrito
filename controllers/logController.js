const Log = require("../models/Log");
const User = require("../models/User");

const getLogs = async (req, res) => {
  try {
    const logs = await Log.findAll({
      include: {
        model: User,
        attributes: ["email"],
      },
      order: [["timestamp", "DESC"]],
    });
    res.json(logs);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener logs" });
  }
};

module.exports = { getLogs };
