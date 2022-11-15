'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('drive', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      person_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "person",
          key: "id",
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      },
      vehicle_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "vehicle",
          key: "id",
        },
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      distance: {
        allowNull: false,
        type: Sequelize.FLOAT
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('drive');
  }
};