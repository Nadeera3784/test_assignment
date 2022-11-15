'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class address extends Model {
    static associate(models) {
      address.belongsTo(models.person, {
        foreignKey: 'person_id',
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
      });
    }
  }
  address.init({
    person_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    street: {
      allowNull: false, 
      type: DataTypes.STRING(100)
    },
    city: {
      allowNull: false, 
      type: DataTypes.STRING(50)
    },
    country: {
      allowNull: false, 
      type: DataTypes.STRING(50)
    }
  }, {
    sequelize,
    modelName: 'address',
    tableName: "address",
    timestamps: false
  });
  return address;
};