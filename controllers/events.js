const { response, request } = require('express');
const Evento = require('../models/Evento');
const getEventos = async (req = request, res = response) => {
  const eventos = await Evento.find().populate('user', 'name');
  res.status(201).json({
    ok: true,
    eventos,
  });
};

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);
  try {
    evento.user = req.uid;
    const eventoGuardado = await evento.save();
    res.json({
      ok: true,
      eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrado',
    });
  }
};

const actualizarEvento = async (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'actualizar evento',
  });
};

const eliminarEvento = async (req, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'eliminar evento',
  });
};

module.exports = { getEventos, crearEvento, actualizarEvento, eliminarEvento };
