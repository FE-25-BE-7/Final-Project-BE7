'use strict';
/** @type {import('sequelize-cli').Migration} */
'use strict';
module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.createTable('Donasis', {
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
            first_name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            last_name: {
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
        await queryInterface.dropTable('Donasis');
    }
};