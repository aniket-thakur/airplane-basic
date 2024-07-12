const {CityService} = require("../services");
const {StatusCodes} = require("http-status-codes");
const {SuccessResponse, ErrorResponse} = require("../utils/common");
const { success } = require("../utils/common/success-response");
const { response } = require("express");

/**
 * POST : /city
 * req-body : {name : Delhi}
 */
async function createCity(req, res){
    try{
        const  city = await CityService.createCity({name: req.body.name});
        SuccessResponse.data = city;
        return res  
                .status(StatusCodes.CREATED)
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error;
        return res  
                .status(error.statusCode)
                .json(ErrorResponse)
    }
    }

async function getCityById(req , res){
    try{
        const cityName = await CityService.getCity(req.params.id);
        
        console.log(cityName)
        SuccessResponse.data = cityName;
        return res 
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error;
        return res    
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

async function getAllCities(req, res){
    try{
        const response = await CityService.getAllCities();
        SuccessResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

async function deleteCity(req, res){
    try{
        const response = await CityService.deleteCity(req.params.id);
        SuccessResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}

async function updateCity(req, res){
    try{
        const response = await CityService.updateCity(
            {name: req.body.name},
            req.params.id
        );
        SuccessResponse.data = response;
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse)
    }
}
module.exports = {
    createCity,
    getCityById,
    getAllCities,
    deleteCity,
    updateCity

}