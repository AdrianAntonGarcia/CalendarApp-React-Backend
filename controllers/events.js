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
  try {
    const eventoId = req.params.id;
    const evento = await Evento.findById(eventoId);
    const uid = req.uid;
    if (!evento) {
      res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id',
      });
    }
    /*Hay que comprobar que la persona que está consultando 
    sea la misma que la que creo el evento*/
    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de editar este evento',
      });
    }
    const nuevoEvento = {
      ...req.body,
      user: uid,
    };

    /**
     * Por defecto nos devuelve el documento antiguo, para traer el nuevo
     * hay que poner la siguiente config como tercer parámetro { new: true}
     */
    const eventoActualizado = await Evento.findByIdAndUpdate(
      eventoId,
      nuevoEvento,
      { new: true }
    );

    res.json({
      ok: true,
      evento: eventoActualizado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

const eliminarEvento = async (req, res = response) => {
  try {
    const eventoId = req.params.id;
    const evento = await Evento.findById(eventoId);
    const uid = req.uid;
    if (!evento) {
      res.status(404).json({
        ok: false,
        msg: 'Evento no existe por ese id',
      });
    }
    /*Hay que comprobar que la persona que está consultando 
    sea la misma que la que creo el evento*/
    if (evento.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'No tiene privilegio de eliminar este evento',
      });
    }

    const eventoBorrado = await Evento.findByIdAndDelete(eventoId);
    res.status(201).json({
      ok: true,
      eventoBorrado
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador',
    });
  }
};

module.exports = { getEventos, crearEvento, actualizarEvento, eliminarEvento };
