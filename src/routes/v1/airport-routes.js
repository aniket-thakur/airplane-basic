const {AirportController} = require('../../controllers');
const{AirportMiddlewares}  = require('../../middlewares');
const express = require('express');
const router = express.Router();

router.post('/', AirportMiddlewares.validateCreateRequest, AirportController.createAirport);
router.get('/all',AirportController.getAllAirport); 
router.get('/:id',AirportController.getAirport);
router.delete('/:id',AirportController.deleteAirport);
router.post('/update/:id', AirportController.updateAirport);


module.exports = router;