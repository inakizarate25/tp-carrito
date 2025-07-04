const CartItem = require("../models/CartItem");

const purchase = async (req, res) => {
  try {
    const items = await CartItem.findAll({ where: { UserId: req.user.id } });

    if (items.length === 0) {
      return res
        .status(400)
        .json({
          message: "El carrito está vacío. No se puede finalizar la compra.",
        });
    }

    await CartItem.destroy({ where: { UserId: req.user.id } });

    res.json({ message: "Compra finalizada, carrito vaciado" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error al procesar la compra", error: err.message });
  }
};
module.exports = { purchase };
