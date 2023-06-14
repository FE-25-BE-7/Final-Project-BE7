'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class artikel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  artikel.init({
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    date: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
    one: DataTypes.STRING,
    two: DataTypes.STRING,
    three: DataTypes.STRING,
    four: DataTypes.STRING,
    five: DataTypes.STRING,
    six: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'artikel',
  });
  return artikel;
};