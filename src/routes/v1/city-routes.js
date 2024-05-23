const express = require('express');
const {CityMiddleware} = require('../../middlewares');
const {CityController} = require("../../controllers");

const router = express.Router();


router.post('/',CityMiddleware.validateCreateRequest, CityController.createCity);

module.exports = router;