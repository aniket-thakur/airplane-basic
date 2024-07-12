const {FlightRepository} = require('../repositories');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
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

module.exports= {
    creatFlight
}