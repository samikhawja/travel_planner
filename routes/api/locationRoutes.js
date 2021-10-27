const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

router.get('/', (req, res) => {
    try {
      const locationData = await Location.findAll({
        include: [Traveller, Trips],
      });
      res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    
})

router.get('/:id', (req, res) => {
    try {
      const locationData = await Location.findByPk(req.params.id, {
        include: [Location, Trips],
      });
      if (!locationData) {
        res.status(404).json({ message: 'No location or trips found with that id!' });
        return;
      } res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.delete('/:id', (req, res) => {
    try {
      const locationData = await Location.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!locationData) {
        res.status(404).json({ message: 'No location found with that id!' });
        return;
      } res.status(200).json(locationData);
    } catch (err) {
      res.status(500).json(err);
    }
});