const express = require('express');
const {InfoController} = require('../../controllers');
const cityRoutes = require('./city-routes');
const airplaneRoutes = require('./airplane-routes');
const airportRoutes = require('./airport-routes');
const flightRoutes = require('./flight-routes');


const router = express.Router();
router.use('/airplane', airplaneRoutes );
router.use('/city',cityRoutes);
router.use('/airport', airportRoutes);
router.use('/flight',flightRoutes);
router.get('/getInfo', InfoController.info);


module.exports = router;