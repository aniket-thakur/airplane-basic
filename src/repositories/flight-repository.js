const {Flight} = require('../models');
const CrudRepository = require('./crud-repository');

class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);   // used when we have to call the  cunstructor of parent class    
    }
}

module.exports = FlightRepository;