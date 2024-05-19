const {AirplaneController} = require('../../controllers');
const {AirplaneMiddlewares} = require('../../middlewares');
const express = require('express');
const router = express.Router();


router.post('/',
            AirplaneMiddlewares.validateCreateRequest,  // middleware route, if everything goes ok then will go to next rounte
            AirplaneController.createAirplane
        );  // api/v1/airplane/  -> post req


module.exports = router;