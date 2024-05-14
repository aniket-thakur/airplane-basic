const {Airplane} = require('../models');
const CrudRepository = require('crud-repository');

class AirplaneRepository extends CrudRepository{
    constructor(){
        super(Airplane);   // used when we have to call the  cunstructor of parent class    
    }
}

module.exports = AirplaneRepository;