// Para recuperar el tipado en el visual studio
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const crearUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    let usuario = await Usuario.findOne({ email });
    /*Si el usuario existe mandamos error */
    if (usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'Un usuario existe con ese correo',
      });
    }
    /*Si no existe guardamos el usuario en la base de datos */
    usuario = new Usuario(req.body);

    //Encriptar Contraseña
    const salt = bcrypt.genSaltSync();
    usuario.password = bcrypt.hashSync(password, salt);

    await usuario.save();
    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor, hable con el admin',
    });
  }
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
