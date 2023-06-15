'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class program extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  program.init({
    organizer: DataTypes.STRING,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'program',
  });
  return program;
};