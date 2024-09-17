// routes/categoriaRoutes.js
const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// GET todas las categorías
router.get('/', categoriaController.getAllCategorias);

// GET una categoría por ID
router.get('/:id', categoriaController.getCategoriaById);

// POST crear una nueva categoría
router.post('/', categoriaController.createCategoria);

// PUT actualizar una categoría existente
router.put('/:id', categoriaController.updateCategoria);

// DELETE eliminar una categoría
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;
