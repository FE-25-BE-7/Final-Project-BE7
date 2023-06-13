'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('donasis', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            order_id: {
                type: Sequelize.STRING,
                allowNull: false
            },
            gross_amount: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            phone: {
                type: Sequelize.STRING,
                allowNull: false
            },
            transaction_token: {
                type: Sequelize.STRING,
                allowNull: false
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
        });
    },
    down: async(queryInterface, Sequelize) => {
        await queryInterface.dropTable('donasis');
    }
};