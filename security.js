const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const secretKey = 'tu_clave_secreta';

app.use(express.json());

app.post('/login', (req, res) => {
  // Comprueba el usuario y la contraseña en una base de datos o cualquier otro medio
  const { username, password } = req.body;

  // Aquí puedes realizar la validación como desees
  if (username === 'usuario' && password === 'contrasena') {
    // Genera un token JWT
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
  } else {
    res.sendStatus(401); // Unauthorized
  }
});

app.listen(3000, () => {
  console.log('Servidor de autenticación iniciado en el puerto 3000');
});
