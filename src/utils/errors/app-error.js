class AppError extends Error{
    constructor(message, statusCode){
        /**
         * calling the parent class (Error) constructor and passing the message
         */
        super(message);    
        this.explanation = message;
        this.statusCode = statusCode;
    }
}

module.exports = AppError;