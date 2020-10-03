const express = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
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

/*Express validator no tiene para validar fechas, por lo que haremos 
una manual. Con el custom mandamos una función personalizada de validación */
router.post(
  '/',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos,
  ],
  crearEvento
);

// Actualizar Evento
router.put(
  '/:id',
  [
    check('title', 'El título es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatoria').custom(isDate),
    check('end', 'Fecha de finalización es obligatoria').custom(isDate),
    validarCampos,
  ],
  actualizarEvento
);

// borrar Evento
router.delete('/:id', eliminarEvento);

module.exports = router;
