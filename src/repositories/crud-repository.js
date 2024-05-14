const Logger  = require('../config');
class CrudRepository{
    constructor(model){
        this.model = model;
    }

    async create(data){
        try{
            const response = await this.model.create(data);
            return response;
        }
        catch(error){
            Logger.error("Something went wrong in the Crup Repo: create");
            throw error;
        }
    }
    
    async destroy(data){
        try{
            const response = await this.model.destroy({
                where: {
                    id: data
                }
            });
            return response;
        }
        catch(error){
            Logger.error("Something went wrong in Crud Repo: Destroy");
        }
    }

    async get(id){
        try{
            const response = await this.model.findByPK(id);
            return response;
        }
        catch(error){
            Logger.error("Something went wrong in Crud Repo: get");
        }
    }

    async getAll(){
        try{
            const response = await this.model.findAll();
            return response;
        }
        catch(error){
            Logger.error("Something went wrong in Crud Repo : getAll")
        }
    }

    async update(data, id){  // data --> {col, value} like = { lastName: 'Doe' }
        try{
            const response = await this.model.update(data, {
                where:{
                    id : id
                }
            })
            return response;
        }
        catch(error){
            Logger.error("Something went wrong in Crud Repo : update");
        }
    }
}

module.exports = CrudRepository;