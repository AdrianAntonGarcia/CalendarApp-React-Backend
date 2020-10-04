const express = require('express');
const { dbConnection } = require('./database/config');
var cors = require('cors');
require('dotenv').config();

// Crear el servidor de Express

const app = express();

// Base de datos
dbConnection();

// CORS, habilitamos el cors con la config básica
app.use(cors());

// Directorio Público
app.use(express.static('public'));

// Lectura y parseo del body
app.use(express.json());

// Rutas
// TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Escuchar peticiones

app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
