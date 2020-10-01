// Para recuperar el tipado en el visual studio
const { response } = require('express');

const crearUsuario = (req, res = response) => {
  const { name, email, password } = req.body;

  // Manejo de errores

  res.status(201).json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  });
};

const loginUsuario = (req, res = response) => {
  const { email, password } = req.body;
  res.status(200).json({
    ok: true,
    msg: 'login',
    email,
    password,
  });
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
