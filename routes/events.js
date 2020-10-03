const express = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const {
  getEventos,
  crearEvento,
  actualizarEvento,
  eliminarEvento,
} = require('../controllers/events');
// Todas tienen que pasar por la validación del JWT

const router = express.Router();
// Podemos subir de nivel el validarJWT ya que lo tenemos para todas las rutas
// Middleware general a todas las rutas de este archivo
router.use(validarJWT);

router.get('/', getEventos);

// Crear un nuevo evento
router.post('/', crearEvento);

// Actualizar Evento
router.put('/:id', actualizarEvento);

// borrar Evento
router.delete('/:id', eliminarEvento);

module.exports = router;
