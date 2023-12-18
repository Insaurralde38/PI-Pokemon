const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    imgUrl: {
      type: DataTypes.TEXT,
      isUrl: true
    },
    hp: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 255 },
      allowNull: false,
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 190 },
      allowNull: false,
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 250 },
      allowNull: false,
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 200 },
      allowNull: false,
    },
    height: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 200 },
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: { min: 1, max: 9999 },
      allowNull: false,
    },
  }, { timestamps: false });
};
