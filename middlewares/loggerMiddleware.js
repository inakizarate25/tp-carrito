const Log = require("../models/Log");

const loggerMiddleware = async (req, res, next) => {
  const start = Date.now();

  // interceptar respuesta para capturar código de estado final
  const originalSend = res.send;
  res.send = async function (body) {
    try {
      const logData = {
        endpoint: req.originalUrl,
        metodo: req.method,
        estado: res.statusCode,
        mensaje: typeof body === "string" ? body.slice(0, 100) : "ok",
        UserId: req.user?.id || null,
        timestamp: new Date(),
      };

      await Log.create(logData);
      const fs = require("fs");
      fs.appendFileSync(
        "logs.txt",
        `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} - ${
          res.statusCode
        }\n`
      );
    } catch (err) {
      console.error("Error al registrar log:", err.message);
    }

    return originalSend.apply(res, arguments);
  };

  next();
};

module.exports = loggerMiddleware;
