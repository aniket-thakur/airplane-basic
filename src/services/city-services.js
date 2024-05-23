const AppError = require('./../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
const{CityRepository} = require('../repositories');


const cityRepository = new CityRepository();

async function createCity(name){
    try{
        const response = await cityRepository.create(name);
        return response;
    }
    catch(error){
        console.log(error);
        if(error.name == 'SequelizeValidationError' ||  error.name == 'SequelizeUniqueConstraintError'){
            let explanation = [];
            error.errors.forEach((err) =>{
                explanation.push(err.message);
                explanation.push(`${err.path} cannot be ${err.value}`)
            });
            console.log(explanation);
            throw new AppError(explanation, StatusCodes.BAD_REQUEST);  
        }
        throw new AppError("Something went wrong when adding the city", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

module.exports = {
    createCity
}