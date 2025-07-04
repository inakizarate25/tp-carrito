const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const { purchase } = require("../controllers/purchaseController");
const router = express.Router();

router.use(authMiddleware);
router.post("/", purchase);

module.exports = router;
