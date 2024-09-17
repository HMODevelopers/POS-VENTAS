module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define('Usuario', {
        IdUsuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NombreUsuario: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true
        },
        ContrasenaHash: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        IdRol: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_conf_roles',
                key: 'IdRol'
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
        tableName: 'plu_conf_usuarios', // Nombre de la tabla en la base de datos
        timestamps: false,              // Desactiva timestamps automáticos
    });

    // Asociación con la tabla Roles
    Usuario.associate = function(models) {
        Usuario.belongsTo(models.Rol, {
            foreignKey: 'IdRol',
            as: 'rol'
        });
    };

    return Usuario;
};
