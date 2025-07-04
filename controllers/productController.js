const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const productos = await Product.findAll();

    if (productos.length === 0) {
      return res.status(404).json({ message: "No hay productos disponibles" });
    }

    res.json(productos);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al obtener productos", error: err.message });
  }
};

module.exports = { getAllProducts };
