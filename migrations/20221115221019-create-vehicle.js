module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vehicle', {
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
      model: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      plate_number : {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(255),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vehicle');
  }
};