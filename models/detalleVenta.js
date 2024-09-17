module.exports = (sequelize, DataTypes) => {
    const DetalleVenta = sequelize.define('DetalleVenta', {
        IdDetalleVenta: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        IdVenta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_pro_ventas', // Nombre de la tabla relacionada
                key: 'IdVenta'
            }
        },
        IdProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_pro_productos', // Nombre de la tabla relacionada
                key: 'IdProducto'
            }
        },
        Cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PrecioUnitario: {
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
        tableName: 'plu_pro_detalle_ventas', // Nombre de la tabla en la base de datos
        timestamps: false,                  // Desactiva timestamps automáticos
    });

    DetalleVenta.associate = models => {
        DetalleVenta.belongsTo(models.Venta, { foreignKey: 'IdVenta' });
        DetalleVenta.belongsTo(models.Producto, { foreignKey: 'IdProducto' });
    };

    return DetalleVenta;
};
