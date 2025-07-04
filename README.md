# 🛒 Carrito de Compras - Backend con Node.js y Frontend básico

Este proyecto consiste en un backend desarrollado con **Node.js + Express** que expone una **API REST** para simular un carrito de compras, con **autenticación JWT**, **persistencia en base de datos SQLite**, **registro de logs**, y un **frontend básico en HTML + Tailwind + Fetch**.

---

## 🚀 Funcionalidades

### 🔧 Backend

- API RESTful para:
  - 📦 Productos
  - 🛒 Carrito (por usuario autenticado)
  - 💳 Finalizar compra
  - 🧾 Ver logs del sistema (solo admin)
  - 🔐 Registro y login con JWT
- Autenticación con JSON Web Tokens
- Contraseñas encriptadas con bcrypt
- Registro automático de logs por petición
- Base de datos SQLite usando Sequelize ORM

### 🎨 Frontend

- Visualización de productos
- Login y registro de usuario
- Agregado de productos al carrito
- Visualización del carrito y compra
- Navbar dinámico según sesión

---

## 🗃️ Tecnologías usadas

- Node.js
- Express.js
- Sequelize ORM
- SQLite
- JWT (jsonwebtoken)
- bcrypt
- Tailwind CSS
- HTML5 + Fetch API

---

## 📁 Instalación

1. **Cloná el repositorio:**

```bash
git clone https://github.com/tuusuario/carrito-backend.git
cd carrito-backend
```

2. **Instalá dependencias:**

```bash
npm install
```

3. **Cargá la base de datos con datos de prueba:**

```bash
node seed.js
```

4. **Configurá las variables de entorno:**
   Creá un archivo `.env` basado en `.env.example`:

```
PORT=3000
JWT_SECRET=miclavesecreta123
```

5. **Levantá el servidor:**

```bash
npm run dev
```

---

## 🌐 Acceso al frontend

El frontend está en la carpeta `public/`.

Navegá a:

```
http://localhost:3000/index.html
```

También podés visitar:

- `login.html` → Iniciar sesión
- `register.html` → Crear cuenta
- `carrito.html` → Ver tu carrito

---

## 👤 Usuarios de prueba

Estos se crean automáticamente al ejecutar `node seed.js`:

| Email          | Contraseña | Rol   |
| -------------- | ---------- | ----- |
| user@test.com  | user123    | user  |
| admin@test.com | admin123   | admin |

---

## 📌 Endpoints REST

### Productos (público)

- `GET /api/productos`

### Autenticación

- `POST /api/register`
- `POST /api/login` → devuelve `{ token }`

### Carrito (autenticado)

- `GET /api/carrito`
- `POST /api/carrito` `{ productoId, cantidad }`
- `DELETE /api/carrito/:id`

### Compra (autenticado)

- `POST /api/compra`

### Logs (solo admin)

- `GET /api/logs`

---

## 🧪 Testing sugerido con Postman

1. `POST /api/login` → obtené el token
2. Usá el token en el header:  
   `Authorization: Bearer <token>`
3. Probá `GET /api/carrito`, `POST /api/carrito`, etc.

---
