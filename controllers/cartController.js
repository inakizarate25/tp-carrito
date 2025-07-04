const CartItem = require("../models/CartItem");
const Product = require("../models/Product");

const getCart = async (req, res) => {
  try {
    const items = await CartItem.findAll({
      where: { UserId: req.user.id },
      include: Product,
    });

    if (items.length === 0) {
      return res.status(404).json({ message: "Tu carrito está vacío" });
    }

    res.json(items);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener el carrito" });
  }
};

const addToCart = async (req, res) => {
  const { productoId, cantidad } = req.body;
  try {
    const item = await CartItem.create({
      UserId: req.user.id,
      ProductId: productoId,
      cantidad,
    });
    res.status(201).json(item);
  } catch (err) {
    res.status(500).json({ message: "Error al agregar al carrito" });
  }
};

const removeFromCart = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await CartItem.destroy({
      where: { id, UserId: req.user.id },
    });
    if (!deleted)
      return res.status(404).json({ message: "Item no encontrado" });
    res.json({ message: "Producto eliminado del carrito" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar del carrito" });
  }
};

module.exports = { getCart, addToCart, removeFromCart };
