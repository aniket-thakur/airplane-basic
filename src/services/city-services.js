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

async function getCity(id){
    try{
        const response = await cityRepository.get(id);
        return response;
    }
    catch(error){
        throw new AppError("No city name present with such id ", StatusCodes.INTERNAL_SERVER_ERROR);
    }
}

async function getAllCities(){
    try{
        const response = await cityRepository.getAll();
        return response
    }
    catch(error){
        throw new AppError("Could not able to fetch. Please try again later!!")
    }
}

async function deleteCity(id){
    try{
        const response = await cityRepository.destroy(id);
        return response;
    }
    catch(error){
        console.log(error.statusCode);
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No city found of such id", StatusCodes.NOT_FOUND);
        }
        else{
            throw new AppError("Something went wrong. Please try again later", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}

async function updateCity(data, id){
    try{

        const response = await  cityRepository.update(data, id);
        return response;
    }
    catch(error){
        if(error.statusCode == StatusCodes.NOT_FOUND){
            throw new AppError("No city found of such id", StatusCodes.NOT_FOUND);
        }
        else{
            throw new AppError("Something went wrong. Please try again later", StatusCodes.INTERNAL_SERVER_ERROR);
        }
    }
}
module.exports = {
    createCity,
    getCity,
    getAllCities,
    deleteCity,
    updateCity
}