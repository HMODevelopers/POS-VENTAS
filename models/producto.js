module.exports = (sequelize, DataTypes) => {
    const Producto = sequelize.define('Producto', {
        IdProducto: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NombreProducto: {
            type: DataTypes.STRING,
            allowNull: false
        },
        DescripcionProducto: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        PrecioCosto: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        StockActual: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        StockMinimo: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        IdCategoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_cat_categorias',  // Nombre de la tabla de categorías
                key: 'IdCategoria'
            }
        },
        Activo: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        FechaCreacion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'plu_pro_productos',   // Nombre de la tabla en la base de datos
        timestamps: false                 // Desactiva timestamps automáticos
    });

    // Relaciona producto con la categoría
    Producto.associate = models => {
        Producto.belongsTo(models.Categoria, { foreignKey: 'IdCategoria' });
    };

    return Producto;
};
