module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('student', {
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
      student_number: {
        allowNull: false,
        unique: true,
        type: Sequelize.STRING(100)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('student');
  }
};