const Traveller = require('./Traveller');
const Location = require('./Location');
const Trips = require('./Trips');

Traveller.belongsToMany(Location, {
  through: { model: Trips, unique: false },
});

Location.belongsToMany(Traveller, {
  through: { model: Trips, unique: false },
});

Traveller.hasOne(Location, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Location.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

Traveller.hasMany(Trips, {
  foreignKey: 'traveller_id',
  onDelete: 'CASCADE',
});

Trips.belongsTo(Traveller, {
  foreignKey: 'traveller_id',
});

module.exports = { Traveller, Location, Trips };