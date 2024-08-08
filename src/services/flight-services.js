const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const { Op } = require('sequelize');
const flightRepository = new FlightRepository();



async function creatFlight(data){       
    try{
        
        const response = await flightRepository.create(data);
        return response;
    }
    catch(error){ 
   
        if(error.name == 'sequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message)
            });
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        else{
            throw new AppError("Something went wrong while creating the flight object", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}


async function getAllFlights(query){
    // trips = DEL-BLR
    let customFilter = {}  
    let sortFilter = []
    if (query.trips){
        console.log( query.trips.split("-"));
        const [departureAirportId, arrivalAirportId] = query.trips.split("-");
        customFilter.departureAirportId = departureAirportId;
        customFilter.arrivalAirportId = arrivalAirportId;
    }
    if (query.price){
        console.log("ehlloe")
        console.log("Hello")
        const [minPrice , maxPrice] = query.price.split("-");
        console.log("Heyy");
        console.log("SFsdfdsfS")
        customFilter.price = {
            [Op.between] : [minPrice , ((maxPrice == undefined)?100000 : maxPrice)]
        }
    }

    if(query.traveller){
        customFilter.totalSeats = {
            [Op.gte] : query.traveller    // sequelize operator w
        }
    }

    if(query.departureDate){
        ending_time = " 23:59:59"   
        customFilter.departureTime = {
            [Op.between] : [query.departureDate, query.departureDate + ending_time]
        }
    }

    if(query.sortBy){
        const params = query.sortBy.split(',');
        const split = params.map((param) => param.split('_'))
        sortFilter =  split
        console.log(sortFilter);
    }

    try{
        const response =  await flightRepository.getAllFlights(customFilter, sortFilter);
        return response;
    }
    catch(error){
        throw new AppError("Could not fetch all the flights. Please try again later");
    }

}

module.exports= {
    creatFlight,
    getAllFlights
}