'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class professor extends Model {
    static associate(models) {
      professor.belongsTo(models.person, {
        foreignKey: 'person_id',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
    }
  }
  professor.init({
    person_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    salary: {
      allowNull: false,
      type : DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'professor',
    tableName: "professor",
    timestamps: false
  });
  return professor;
};