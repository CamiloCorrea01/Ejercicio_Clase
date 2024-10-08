const express = require('express');
const cors = require('cors'); // Importar CORS

const app = express();

// Conectar a la base de datos
require('./drivers/connect-db');

const swaggerUI = require('swagger-ui-express');
const swaggerSpec = require('./swagger');

// Configuración del puerto
app.set('PORT', process.env.PORT || 3000);

// Middleware
app.use(cors()); // Habilitar CORS
app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes como JSON
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Rutas
app.use('/restaurants', require('./routes/restaurant'));
app.use('/dishes', require('./routes/dishes'));

// Iniciar el servidor
app.listen(app.get('PORT'), () => console.log(`Server Ready at port ${app.get('PORT')}`));
