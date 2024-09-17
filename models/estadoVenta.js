module.exports = (sequelize, DataTypes) => {
    const EstadoVenta = sequelize.define('EstadoVenta', {
        IdEstadoVenta: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NombreEstado: {
            type: DataTypes.STRING(50),
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
        tableName: 'plu_cat_estado_ventas', // Nombre de la tabla en la base de datos
        timestamps: false,                 // Desactiva timestamps automáticos
    });

    return EstadoVenta;
};
