const router = require('express').Router();
const { Location, Traveller, Trips } = require('../../models');

router.post('/', (req, res) => {
    try {
      const tripData = await Tag.create({
        product_id: req.body.product_id,
      });
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', (req, res) => {
    try {
      const tripsData = await Trips.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (!tripsData) {
        res.status(404).json({ message: 'No trips found with that id!' });
        return;
      } res.status(200).json(tripsData);
    } catch (err) {
      res.status(500).json(err);
    }
});

module.exports = router;