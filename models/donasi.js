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
        order_id: DataTypes.STRING,
        gross_amount: DataTypes.INTEGER,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        transaction_token: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Donasi',
    });
    return Donasi;
};