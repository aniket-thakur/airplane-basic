const{AirportService} = require('../services');
const{StatusCodes} = require('http-status-codes');
const{SuccessResponse, ErrorResponse} = require('../utils/common');


async function createAirport(req, res){
    try{
        const response = await AirportService.createAirport({
            name : req.body.name,
            code : req.body.code,
            cityId : req.body.cityid
            })
        console.log(response)
        SuccessResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        console.log(error);
        console.log(error.statusCode);
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAllAirport(req, res){
    try{
    
        const response = await AirportService.getAllAirports()
        SuccessResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function getAirport(req, res){
    try{
        const response = await AirportService.getAirport(req.params.id)
        SuccessResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function updateAirport(req, res){
    try{
        const response = await AirportService.updateAirport({
            name : req.body.name,
            code : req.body.code,
            cityId : req.body.cityid
            }, req.params.id);
        SuccessResponse.data = response

        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(error){
        console.log(error);
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}

async function deleteAirport(req, res){
    try{
        const response = await AirportService.deleteAirport(req.params.id)
        SuccessResponse.data = response
        return res
                .status(StatusCodes.OK)
                .json(SuccessResponse);
    }
    catch(error){
        ErrorResponse.error = error;
        return res
                .status(error.statusCode)
                .json(ErrorResponse);
    }
}


module.exports = {
    createAirport,
    getAllAirport,
    getAirport,
    updateAirport,
    deleteAirport

}