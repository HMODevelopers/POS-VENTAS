module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('Category', {
      IdCategoria: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      NombreCategoria: {
        type: DataTypes.STRING(255),
        allowNull: false
      },
      DescripcionCategoria: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      Activo: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      FechaCreacion: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    }, {
      tableName: 'plu_cat_categorias',
      timestamps: false
    });
  
    return Category;
  };
  