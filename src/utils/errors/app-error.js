class AppError extends Error{
    constructor(message, StatusCode){
        /**
         * calling the parent class (Error) constructor and passing the message
         */
        super(message);    
        this.explanation = message;
        this.StatusCode = StatusCode;
    }
}

module.exports = AppError;