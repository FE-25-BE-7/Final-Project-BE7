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
    user_id: DataTypes.INTEGER,
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'artikel',
  });
  return artikel;
};