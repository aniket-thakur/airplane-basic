const {AirplaneService} = require('../services');
const { StatusCodes } = require('http-status-codes');
const {SuccessResponse,ErrorResponse} = require('./../utils/common');
/**
 * POST : /airplanes
 * req-body : {modelNumber : AirBus200, capacity: 250}
 */
async function createAirplane(req, res){
    try{
        console.log(req.body)
        const airplane = await AirplaneService.createAirplane ({
            modelNumber: req.body.modelNumber,
            capacity : req.body.capacity
        });
        SuccessResponse.data = airplane;
        // SuccessResponse.message = "Successfully created an airplane"
        return res
                .status(StatusCodes.CREATED)
                .json(SuccessResponse);
    }
    catch(error){
        // ErrorResponse.message  ='Something went wrong while creating airplane (controller)';
        ErrorResponse.error = error
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

async function getAirplanes(req, res){
    try{
        const listAirplanes = await AirplaneService.getAirplanes();
        SuccessResponse.data = listAirplanes;

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

async function getAirplanebyID(req, res){
    try{
        const airplane = await AirplaneService.getAirplaneByID(req.params.id);
        SuccessResponse.data = airplane;
        return res
                .status(StatusCodes.OK) 
                .json(SuccessResponse)
    }
    catch(error){
        ErrorResponse.error = error;
        return res
                .status(StatusCodes.NOT_FOUND)
                .json(ErrorResponse)
    }
}

async function updateAirplane(req, res){
    try{
        
        const airplane = await AirplaneService.updateAirplane({
            modelNumber: req.body.modelNumber,
            capacity : req.body.capacity
        }, req.params.id);
        SuccessResponse.data = airplane;
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

async function deleteAirplane(req, res){
    try{
        const airplane = await AirplaneService.deleteAirplane(req.params.id);
        SuccessResponse.data = airplane;
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
    createAirplane, getAirplanes,getAirplanebyID, updateAirplane, deleteAirplane
}