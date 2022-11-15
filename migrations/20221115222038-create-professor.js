module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('professor', {
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
      salary: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('professor');
  }
};