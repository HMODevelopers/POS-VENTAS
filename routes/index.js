// routes/index.js
const express = require('express');
const router = express.Router();

// Importa todos los controladores
const categoriaRoutes = require('./categoriaRoutes');
const estadoVentaRoutes = require('./estadoVentaRoutes');
const tipoPrecioRoutes = require('./tipoPrecioRoutes');
const parametroRoutes = require('./parametroRoutes');
const rolRoutes = require('./rolRoutes');
const usuarioRoutes = require('./usuarioRoutes');
const clienteRoutes = require('./clienteRoutes');
const detalleVentaRoutes = require('./detalleVentaRoutes');
const logRoutes = require('./logRoutes');
const precioRoutes = require('./precioRoutes');
const productoRoutes = require('./productoRoutes');
const ventaRoutes = require('./ventaRoutes');

// Configura las rutas para cada recurso
router.use('/categorias', categoriaRoutes);
router.use('/estados-venta', estadoVentaRoutes);
router.use('/tipos-precio', tipoPrecioRoutes);
router.use('/parametros', parametroRoutes);
router.use('/roles', rolRoutes);
router.use('/usuarios', usuarioRoutes);
router.use('/clientes', clienteRoutes);
router.use('/detalles-venta', detalleVentaRoutes);
router.use('/logs', logRoutes);
router.use('/precios', precioRoutes);
router.use('/productos', productoRoutes);
router.use('/ventas', ventaRoutes);

module.exports = router;
