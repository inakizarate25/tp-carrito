// seed.js
const bcrypt = require("bcrypt");
const sequelize = require("./config/db");
const Product = require("./models/Product");
const User = require("./models/User");
const CartItem = require("./models/CartItem");
const Log = require("./models/Log");

// forzar sincronización
const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    console.log("Base de datos reseteada.");

    // Crear usuarios
    const passwordHashUser = await bcrypt.hash("user123", 10);
    const passwordHashAdmin = await bcrypt.hash("admin123", 10);

    const user = await User.create({
      email: "user@test.com",
      password_hash: passwordHashUser,
    });
    const admin = await User.create({
      email: "admin@test.com",
      password_hash: passwordHashAdmin,
      role: "admin",
    });

    console.log("Usuarios creados:");
    console.log(` - user@test.com (pass: user123)`);
    console.log(` - admin@test.com (pass: admin123)`);

    // Crear productos
    await Product.bulkCreate([
      { nombre: "Camiseta deportiva", precio: 2500 },
      { nombre: "Zapatillas running", precio: 12000 },
      { nombre: "Botella térmica", precio: 1500 },
      { nombre: "Mochila urbana", precio: 8900 },
      { nombre: "Auriculares Bluetooth", precio: 4500 },
      { nombre: "Gorra clásica", precio: 1600 },
      { nombre: "Remera básica", precio: 2000 },
      { nombre: "Buzo canguro", precio: 5200 },
      { nombre: "Pantalón de entrenamiento", precio: 3900 },
      { nombre: "Short deportivo", precio: 1700 },
      { nombre: "Medias técnicas", precio: 900 },
      { nombre: "Cinturón táctico", precio: 2200 },
      { nombre: "Lentes de sol", precio: 3100 },
      { nombre: "Bolso de viaje", precio: 6700 },
      { nombre: "Guantes de gym", precio: 1400 },
    ]);

    console.log("Productos cargados exitosamente.");
    process.exit();
  } catch (err) {
    console.error("Error en el seed:", err.message);
    process.exit(1);
  }
};

seedDatabase();
