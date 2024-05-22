const {AirplaneRepository} = require("../repositories");
const AppError = require('./../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');

const airplaneRepository = new AirplaneRepository();

async function createAirplane(data){
    try{
        const airplane = await airplaneRepository.create(data);
        return airplane;
    }
    catch(error){
        if(error.name == 'SequelizeValidationError'){
            console.log(error)
            let explanation =[];
            error.errors.forEach((err) => {
                explanation.push(err.message) 
            })
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);      
        }
        throw new AppError('cannot create airplane', StatusCodes)
    }
}


async function getAirplanes(){
    try{

        const airplanes = await airplaneRepository.getAll();
        return airplanes;
    }
    catch(error){
        throw new AppError("Something went Wrong while fetching the airplanes", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAirplaneByID(id){
    try{
        console.log(id);
        const airplane  = await airplaneRepository.get(id);
        console.log(airplane);
        return airplane;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airplane found of such id", error.statusCode)
        }
        throw new AppError("Something went wrong while fetching all the airplanse.", StatusCodes.NOT_FOUND);
    }
}

async function updateAirplane(data, id){
    try{
        const airplane = await airplaneRepository.update(data, id);
        return airplane;
    }
    catch(error){
        console.log(error)
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airplane found of such id", error.statusCode);
        }
        throw new AppError("Something went wrong while making the update", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function deleteAirplane(id){
    try{
        const response = await airplaneRepository.destroy(id);
        return response;
    }
    catch(error){
        console.log(error.statusCode);
        console.log(StatusCodes.NOT_FOUND);
        if(error.statusCode === StatusCodes.NOT_FOUND){
            throw new AppError("No airplane found of such id", StatusCodes.NOT_FOUND)
        }
        throw new AppError("Something went wrong when attempting to delete the recod", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}
module.exports = {
    createAirplane, getAirplanes, getAirplaneByID, updateAirplane, deleteAirplane
}
