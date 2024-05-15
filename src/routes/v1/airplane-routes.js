const {AirplaneController} = require('../../controllers');
const express = require('express');
const router = express.Router();


router.post('/', AirplaneController.createAirplane);  // api/v1/airplane/  -> post req


module.exports = router;