'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('detail_artikels', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      artikel_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'artikel',
          key: 'id'
        }
      },
      one: {
        type: Sequelize.STRING
      },
      two: {
        type: Sequelize.STRING
      },
      three: {
        type: Sequelize.STRING
      },
      four: {
        type: Sequelize.STRING
      },
      five: {
        type: Sequelize.STRING
      },
      six: {
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
    await queryInterface.dropTable('detail_artikels');
  }
};