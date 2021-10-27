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
        type: DataTypes.STRING,
        references: {
            model: 'traveller',
            key: 'id',
          },
    },
    location_id: {
        type: DataTypes.STRING,
        references: {
            model: 'location',
            key: 'id',
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
