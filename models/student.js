'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class student extends Model {
    static associate(models) {
      student.belongsTo(models.person, {
        foreignKey: 'person_id',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
    }
  }
  student.init({
    person_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    student_number: { 
      allowNull: false,
      unique: true,
      type : DataTypes.STRING(100)
    }
  }, {
    sequelize,
    modelName: 'student',
    tableName: "student",
    timestamps: false
  });
  return student;
};