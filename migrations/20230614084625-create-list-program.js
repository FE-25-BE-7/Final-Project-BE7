'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('listPrograms', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      listprogram_id: {
        type: Sequelize.STRING,
        allowNull: false
      },
      image_one: {
        type: Sequelize.STRING
      },
      image_two: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      sub_title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.STRING
      },
      organizer: {
        type: Sequelize.STRING
      },
      link_name: {
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
    await queryInterface.dropTable('listPrograms');
  }
};