const express = require('express');
const {InfoController} = require('../../controllers');
const cityRoutes = require('./city-routes');
const airplaneRoutes = require('./airplane-routes');


const router = express.Router();
router.use('/airplane', airplaneRoutes );
router.use('/city',cityRoutes);
router.get('/getInfo', InfoController.info);


module.exports = router;