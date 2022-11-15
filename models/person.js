'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class person extends Model {

    static associate(models) {
     
    }
  }
  person.init({
    name: {
      allowNull: false,
      unique: true,
      type : DataTypes.STRING(50)
    },
  }, {
    sequelize,
    modelName: 'person',
    tableName: "person",
    timestamps: false
  });
  return person;
};