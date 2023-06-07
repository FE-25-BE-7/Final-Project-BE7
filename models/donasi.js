'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Donasi extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Donasi.init({
        user_id: DataTypes.INTEGER,
        keterangan: DataTypes.STRING,
        username: DataTypes.STRING,
        response_midtrans: DataTypes.TEXT

    }, {
        sequelize,
        modelName: 'Donasi',
    });
    return Donasi;
};