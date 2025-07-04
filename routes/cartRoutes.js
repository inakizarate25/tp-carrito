const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
  getCart,
  addToCart,
  removeFromCart,
} = require("../controllers/cartController");
const router = express.Router();

router.use(authMiddleware);

router.get("/", getCart);
router.post("/", addToCart);
router.delete("/:id", removeFromCart);

module.exports = router;
