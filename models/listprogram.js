'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ListProgram extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ListProgram.init({
    image_one: DataTypes.STRING,
    image_two: DataTypes.STRING,
    title: DataTypes.STRING,
    sub_title: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.STRING,
    organizer: DataTypes.STRING,
    link_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ListProgram',
  });
  return ListProgram;
};