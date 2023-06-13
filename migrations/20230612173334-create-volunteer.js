'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('volunteers', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id'
                }
            },
            program_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'programs',
                    key: 'id'
                }
            },
            fullName: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            phoneNumber: {
                type: Sequelize.INTEGER
            },
            age: {
                type: Sequelize.INTEGER
            },
            address: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('volunteers');
    }
};