const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'tu_clave_secreta';

// Middleware para verificar el token en todas las rutas
app.use((req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.sendStatus(403); // Forbidden
  }

  // Verifica y decodifica el token JWT
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.sendStatus(403); // Forbidden
    }

    req.user = decoded.username;
    next();
  });
});

app.get('/', (req, res) => {
  res.send(`¡Hola, ${req.user}!`);
});

app.listen(4000, () => {
  console.log('Servidor protegido iniciado en el puerto 4000');
});
