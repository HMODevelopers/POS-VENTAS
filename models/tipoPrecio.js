module.exports = (sequelize, DataTypes) => {
    const TipoPrecio = sequelize.define('TipoPrecio', {
        IdTipoPrecio: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NombreTipoPrecio: {
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
        tableName: 'plu_cat_tipo_precios', // Nombre de la tabla en la base de datos
        timestamps: false,                 // Desactiva timestamps automáticos
    });

    return TipoPrecio;
};
