// controllers/categoriaController.js
const Categoria = require('../models/categoria');

// Obtener todas las categorías
exports.getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las categorías' });
    }
};

// Obtener una categoría por ID
exports.getCategoriaById = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener la categoría' });
    }
};

// Crear una nueva categoría
exports.createCategoria = async (req, res) => {
    try {
        const { NombreCategoria, DescripcionCategoria, Activo } = req.body;
        const nuevaCategoria = await Categoria.create({
            NombreCategoria,
            DescripcionCategoria,
            Activo,
            FechaCreacion: new Date(),
        });
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la categoría' });
    }
};

// Actualizar una categoría existente
exports.updateCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const { NombreCategoria, DescripcionCategoria, Activo } = req.body;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        categoria.NombreCategoria = NombreCategoria;
        categoria.DescripcionCategoria = DescripcionCategoria;
        categoria.Activo = Activo;
        await categoria.save();
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la categoría' });
    }
};

// Eliminar una categoría
exports.deleteCategoria = async (req, res) => {
    try {
        const { id } = req.params;
        const categoria = await Categoria.findByPk(id);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }
        await categoria.destroy();
        res.json({ message: 'Categoría eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la categoría' });
    }
};
