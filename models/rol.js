module.exports = (sequelize, DataTypes) => {
    const Rol = sequelize.define('Rol', {
        IdRol: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NombreRol: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        DescripcionRol: {
            type: DataTypes.TEXT,
            allowNull: true
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
        tableName: 'plu_conf_roles', // Nombre de la tabla en la base de datos
        timestamps: false,           // Desactiva timestamps automáticos
    });

    return Rol;
};
