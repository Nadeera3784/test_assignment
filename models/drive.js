'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drive extends Model {
    static associate(models) {
      drive.belongsTo(models.person, {
        foreignKey: 'person_id',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
      drive.belongsTo(models.vehicle, {
        foreignKey: 'vehicle_id',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
    }
  }
  drive.init({
    person_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    vehicle_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    date: {
      allowNull: false,
      type: DataTypes.DATE
    },
    distance: {
      allowNull: false,
      type: DataTypes.FLOAT
    }

  }, {
    sequelize,
    modelName: 'drive',
    tableName: "drive",
    timestamps: false
  });
  return drive;
};