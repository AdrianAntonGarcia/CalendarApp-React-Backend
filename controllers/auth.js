// Para recuperar el tipado en el visual studio
const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');
const { generarJWT } = require('../helpers/jwt');

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

    // Generar JWT

    const token = await generarJWT(usuario.id, usuario.name);

    res.status(201).json({
      ok: true,
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor, hable con el admin',
    });
  }
};

const loginUsuario = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const usuario = await Usuario.findOne({ email });
    /*Si el usuario no existe mandamos error */
    if (!usuario) {
      return res.status(400).json({
        ok: false,
        msg: 'No existe un usuario con ese email',
      });
    }

    // Confirmar el password
    const validPassword = bcrypt.compareSync(password, usuario.password);
    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: 'Password incorrecto',
      });
    }
    // Generar nuestro JWT
    const token = await generarJWT(usuario.id, usuario.name);

    res.status(200).json({
      ok: true,
      msg: 'login',
      uid: usuario.id,
      name: usuario.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Por favor, hable con el admin',
    });
  }
};

const revalidarToken = (req, res = response) => {
  res.json({
    ok: true,
    msg: 'renew',
  });
};

module.exports = { crearUsuario, loginUsuario, revalidarToken };
