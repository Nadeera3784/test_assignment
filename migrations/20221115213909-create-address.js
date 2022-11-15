module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('address', {
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
      street: {
        allowNull: false, 
        type: Sequelize.STRING(100)
      },
      city: {
        allowNull: false, 
        type: Sequelize.STRING(50)
      },
      country: {
        allowNull: false, 
        type: Sequelize.STRING(50)
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('address');
  }
};