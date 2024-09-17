// app.js
const express = require('express');
const app = express();
const routes = require('./routes');

// Middleware para parsear JSON
app.use(express.json());

// Usa las rutas definidas en el archivo index.js de la carpeta routes
app.use('/api', routes);

// Manejo de errores (opcional)
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        error: err.message || 'Error interno del servidor',
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
