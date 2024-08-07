const {FlightService} = require('../services');
const {StatusCodes} = require('http-status-codes');
const{SuccessResponse,ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');


async function createFlight(req, res){
    try{

        const response = await FlightService.creatFlight({
            flightNumber :  req.body.flightNumber,
            airplaneId : req.body.airplaneId,
            departureAirportId : req.body.departureAirportId,
            arrivalAirportId : req.body.arrivalAirportId,
            departureTime : req.body.departureTime,
            arrivalTime : req.body.arrivalTime,
            price : req.body.price,
            boardingGate : req.body.boardingGate,
            totalSeats : req.body.totalSeats
        })
        SuccessResponse.data = response;
        return res
        .status(StatusCodes.OK)
        .json(SuccessResponse)
    }
    catch(error){
        console.log(error);
        ErrorResponse.error = error
        return res
                    .status(error.statusCode)
                    .json(ErrorResponse);
    }    
}

async function getAllFlights(req, res){
    try{
        const response =  await FlightService.getAllFlights(req.query);
        SuccessResponse.data = response;
        return res  
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.INTERNAL_SERVER_ERROR)
                .json(ErrorResponse)
    }
}
module.exports = {
    createFlight,
    getAllFlights
}