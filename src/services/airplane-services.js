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
        if(error.StatusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No airplane found of such id", error.statusCode)
        }
        throw new AppError("Something went wrong while fetching all the airplanse.", StatusCodes.NOT_FOUND);
    }
}
module.exports = {
    createAirplane, getAirplanes, getAirplaneByID
}