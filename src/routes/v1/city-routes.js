const express = require('express');
const {CityMiddlewares} = require('../../middlewares');
const {CityController} = require("../../controllers");

const router = express.Router();


router.post('/',CityMiddlewares.validateCreateRequest, CityController.createCity);
router.get('/all',CityController.getAllCities); 
router.get('/:id',CityController.getCityById);
router.delete('/:id',CityController.deleteCity);
router.post('/update/:id', CityController.updateCity);
module.exports = router;