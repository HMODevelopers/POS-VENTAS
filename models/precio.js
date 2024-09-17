module.exports = (sequelize, DataTypes) => {
    const Precio = sequelize.define('Precio', {
        IdPrecio: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        IdProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_pro_productos',  // Nombre de la tabla de productos
                key: 'IdProducto'
            }
        },
        IdTipoPrecio: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_cat_tipo_precios',  // Nombre de la tabla de tipo precios
                key: 'IdTipoPrecio'
            }
        },
        Precio: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
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
        tableName: 'plu_pro_precios',   // Nombre de la tabla en la base de datos
        timestamps: false               // Desactiva timestamps automáticos
    });

    Precio.associate = models => {
        Precio.belongsTo(models.Producto, { foreignKey: 'IdProducto' });
        Precio.belongsTo(models.TipoPrecio, { foreignKey: 'IdTipoPrecio' });
    };

    return Precio;
};
