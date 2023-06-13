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
    detail_artikel.init({
        artikel_id: DataTypes.INTEGER,
        one: DataTypes.STRING,
        two: DataTypes.STRING,
        three: DataTypes.STRING,
        four: DataTypes.STRING,
        five: DataTypes.STRING,
        six: DataTypes.STRING
    }), {
        sequelize,
        modelName: 'detail_artikel',
    }
    return detail_artikel;
};