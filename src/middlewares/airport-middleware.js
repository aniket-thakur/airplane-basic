const{StatusCodes} = require('http-status-codes');
const {ErrorResponse} = require('../utils/common');
const AppError = require('../utils/errors/app-error');

// const {StatusCodes} = require('http-status-codes');
// const { ErrorResponse } = require('./../utils/common');
// const AppError = require('../utils/errors/app-error');


function validateCreateRequest(req, res, next){

    // if(req.body.name && req.body.code && req.body.cityid) {
    //     next();
    // }
    if(!req.body.name){
        ErrorResponse.message = "something went wrong while creating the airport (middleware)";
        ErrorResponse.error = new AppError(["Name not found in the request"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = "something went wrong while creating the airport (middleware)";
        ErrorResponse.error = new AppError(["Airport Code not found in the request"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    if(!req.body.cityid){
        ErrorResponse.message = "something went wrong while creating the airport (middleware)";
        ErrorResponse.error = new AppError(["Ciry ID not found in the request"], StatusCodes.BAD_REQUEST)
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json(ErrorResponse);
    }
    next();
}

module.exports = {
    validateCreateRequest
}