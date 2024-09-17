module.exports = (sequelize, DataTypes) => {
    const Venta = sequelize.define('Venta', {
        IdVenta: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        IdUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_op_usuarios', // Nombre de la tabla de usuarios
                key: 'IdUsuario'
            }
        },
        Total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        IdEstadoVenta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_cat_estadosventa', // Nombre de la tabla de estados de venta
                key: 'IdEstadoVenta'
            }
        },
        FechaVenta: {
            type: DataTypes.DATE,
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
        tableName: 'plu_op_ventas', // Nombre de la tabla en la base de datos
        timestamps: false // Desactiva timestamps automáticos
    });

    // Relaciones con otros modelos
    Venta.associate = models => {
        Venta.belongsTo(models.Usuario, { foreignKey: 'IdUsuario' });
        Venta.belongsTo(models.EstadoVenta, { foreignKey: 'IdEstadoVenta' });
    };

    return Venta;
};
