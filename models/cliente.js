module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define('Cliente', {
        IdCliente: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        NombreCliente: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        RFC: {
            type: DataTypes.STRING(13),
            allowNull: false,
            unique: true
        },
        Direccion: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        Telefono: {
            type: DataTypes.STRING(15),
            allowNull: true
        },
        Email: {
            type: DataTypes.STRING(100),
            allowNull: true,
            validate: {
                isEmail: true
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
        tableName: 'plu_pro_clientes', // Nombre de la tabla en la base de datos
        timestamps: false,              // Desactiva timestamps automáticos
    });

    return Cliente;
};