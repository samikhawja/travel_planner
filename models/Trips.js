const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model {}

Trips.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    trip_budget: {
      type: DataTypes.STRING,
    },
    traveller_amount: {
      type: DataTypes.STRING,
    },
    traveller_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'traveller',
            key: 'id',
            unique: false,
          },
    },
    location_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'location',
            key: 'id',
            unique: false,
          },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trips',
  }
);

module.exports = Trips;
