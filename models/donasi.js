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
        order_id: DataTypes.STRING,
        gross_amount: DataTypes.INTEGER,
        customer_first_name: DataTypes.STRING,
        customer_last_name: DataTypes.STRING,
        customer_email: DataTypes.STRING,
        customer_phone: DataTypes.STRING,
        transaction_token: DataTypes.STRING


    }, {
        sequelize,
        modelName: 'Donasi',
    });
    return Donasi;
};