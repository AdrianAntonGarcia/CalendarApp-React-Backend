const express = require('express');
const router = express.Router();
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');
// Todas tienen que pasar por la validación del JWT
// Obtener eventos
router.get('/', getEventos);

// Crear un nuevo evento
router.post('/', crearEvento);

// Actualizar Evento
router.put('/:id', actualizarEvento);

// borrar Evento
router.delete('/:id', eliminarEvento);

module.exports = router;
