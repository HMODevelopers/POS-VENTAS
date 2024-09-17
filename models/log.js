module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define('Log', {
        IdLog: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        IdUsuario: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'plu_conf_usuarios', // Nombre de la tabla de usuarios
                key: 'IdUsuario'
            }
        },
        Accion: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        FechaAccion: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
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
        tableName: 'plu_pro_log',    // Nombre de la tabla en la base de datos
        timestamps: false            // Desactiva timestamps automáticos
    });

    Log.associate = models => {
        Log.belongsTo(models.Usuario, { foreignKey: 'IdUsuario' });
    };

    return Log;
};
