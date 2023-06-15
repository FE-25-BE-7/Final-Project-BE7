'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('artikels', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            author: {
                type: Sequelize.STRING,
                allowNull: false
            },
            title: {
                type: Sequelize.STRING,
                allowNull: false
            },
            date: {
                type: Sequelize.STRING,
            },
            image: {
                type: Sequelize.STRING,
            },
            description: {
                type: Sequelize.TEXT
            },
            one: {
                type: Sequelize.TEXT
            },
            two: {
                type: Sequelize.TEXT
            },
            three: {
                type: Sequelize.TEXT
            },
            four: {
                type: Sequelize.TEXT
            },
            five: {
                type: Sequelize.TEXT
            },
            six: {
                type: Sequelize.TEXT
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
        await queryInterface.dropTable('artikels');
    }
};