const { response, request } = require('express');

const getEventos = async (req = request, res = response) => {
  res.status(201).json({
    ok: true,
    msg: 'obtener eventos',
  });
};

const crearEvento = async (req, res = response) => {
  // verificar que tenga el evento.
  console.log(req.body);
  res.status(201).json({
    ok: true,
    msg: 'crear evento',
  });
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
