module.exports = (sequelize, DataTypes) => {
    const Configuracion = sequelize.define('Configuracion', {
        Clave: {
            type: DataTypes.STRING(50),
            primaryKey: true,
            allowNull: false
        },
        Valor: {
            type: DataTypes.TEXT,
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
        tableName: 'plu_conf_configuracion', // Nombre de la tabla en la base de datos
        timestamps: false,                   // Desactiva timestamps automáticos
    });

    return Configuracion;
};
