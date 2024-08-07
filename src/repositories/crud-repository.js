const Logger  = require('../config');
const AppError = require('../utils/errors/app-error');
const {StatusCodes} = require('http-status-codes');
class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        const response = await this.model.create(data);
        return response;
    }
    
    async destroy(data){
 
        const response = await this.model.destroy({
            where: {
                id: data
            }
        });
        if(!response){
            console.log(response);
            throw new AppError('',  StatusCodes.NOT_FOUND);
        }
        return response;
    
    }

    async get(id){
        
        const response = await this.model.findByPk(id);
        if(!response){
            console.log(response)
            throw new AppError('', StatusCodes.NOT_FOUND);
        }
        return response;
    }
       

    async getAll(){
       
        const response = await this.model.findAll();
        return response;
    }
       
    

    async update(data, id){  // data --> {col, value} like = { lastName: 'Doe' }
        const response = await this.model.update(data, {
            where:{
                id : id
            }
        })
        console.log(response)
        if(!response[0]){
            throw new AppError("", StatusCodes.NOT_FOUND);
        }
        return response;
    }

}
module.exports = CrudRepository;