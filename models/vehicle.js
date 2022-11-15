'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vehicle extends Model { 
    static associate(models) {
      vehicle.belongsTo(models.person, {
        foreignKey: 'person_id',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
    }
  }
  vehicle.init({
    person_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    model: {
      allowNull: false,
      type: DataTypes.STRING(255)
    },
    plate_number : {
      allowNull: false,
      unique: true,
      type: DataTypes.STRING(255),
    }
  }, {
    sequelize,
    modelName: 'vehicle',
    tableName: "vehicle",
    timestamps: false
  });
  return vehicle;
};