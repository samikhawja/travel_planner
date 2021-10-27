const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Traveller, Location, Trips} = require('../../models');

router.get('/',  async (req, res) => {
    try {
      const travellerData = await Traveller.findAll({
        include: [Location, Trips],
      });
      res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    try {
      const locationData = await Traveller.create({
        location_id: req.body.location_id,
      });
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const travelllerData = await Travelller.findByPk(req.params.id, {
        include: [Location, Trips],
      });
      if (!travelllerData) {
        res.status(404).json({ message: 'No travelller found with that id!' });
        return;
      } res.status(200).json(travelllerData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    try {
      const travellerData = await Traveller.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!travellerData) {
        res.status(404).json({ message: 'No traveller found with that id!' });
        return;
      } res.status(200).json(travellerData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;