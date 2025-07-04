const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

// modelos
require("./models/User");
require("./models/Product");
require("./models/CartItem");
require("./models/Log");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
const loggerMiddleware = require("./middlewares/loggerMiddleware");

app.use(loggerMiddleware); // ¡Después de express.json() y antes de las rutas!
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const purchaseRoutes = require("./routes/purchaseRoutes");
const logRoutes = require("./routes/logRoutes");

app.use("/api", authRoutes);
app.use("/api/productos", productRoutes);
app.use("/api/carrito", cartRoutes);
app.use("/api/compra", purchaseRoutes);
app.use("/api/logs", logRoutes);

sequelize.sync({ alter: true }).then(() => {
  console.log("Base de datos sincronizada");
  app.listen(PORT, () =>
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
  );
});
