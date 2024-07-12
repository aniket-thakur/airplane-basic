const{AirportRepository} = require('../repositories');
const AppError= require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');

const airportRepository = new AirportRepository();

async function createAirport(data){
    try{
        console.log(data)
        const response = await airportRepository.create(data);
        console.log(response);  
        return response;
    }
    catch(error){
        console.log(error);
        if(error.name == 'SequelizeValidationError'){
            let explanation = [];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            })
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);
        }
        else{
            throw new AppError("Something went wrong while creating the Airport",StatusCodes.INTERNAL_SERVER_ERROR);
        }

    }
}

async function getAllAirports(){
    try{
        const response = await airportRepository.getAll();
        return response;
    }
    catch(error){
        throw new AppError("Something went wrong while fetching all the airports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirport(id){
    try{
        const response = await airportRepository.get(id);
        return response;
    }
    catch(error){
        throw new AppError("Something went wrong while fetching the airports", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function updateAirport(data, id){
    try{
        console.log(id);
        console.log(data);
        const response = await airportRepository.update(data, id);
        console.log(response);
        return response;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airport found of such id", StatusCodes.NOT_FOUND);
        }
        else{
            throw new AppError("Something went wrong. Please try again later", StatusCodes.INTERNAL_SERVER_ERROR);
        }

    }
}

async function deleteAirport(id){
    try{
        const response = await airportRepository.destroy(id);
        return response;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airport found of such id", StatusCodes.NOT_FOUND);
        }
        else{
            throw new AppError("Unable to delete. Please try again later", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
module.exports= {
    createAirport,
    getAllAirports,
    getAirport,
    updateAirport,
    deleteAirport
}