module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('person', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(50)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('person');
  }
};