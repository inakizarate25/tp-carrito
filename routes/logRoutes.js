const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const isAdmin = require("../middlewares/isAdmin");
const { getLogs } = require("../controllers/logController");
const router = express.Router();

router.use(authMiddleware, isAdmin);
router.get("/", getLogs);

module.exports = router;
