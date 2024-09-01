const {Flight, Airport} = require('../models');
const CrudRepository = require('./crud-repository');
const Sequelize = require('sequelize')
class FlightRepository extends CrudRepository{
    constructor(){
        super(Flight);   // used when we have to call the  cunstructor of parent class    
    }

    async getAllFlights(filter, sort){
        const response = await Flight.findAll({
            where : filter,
            order : sort,
            include :[    // used for joins. This basically does a left join 
                {   //https://stackoverflow.com/questions/42226351/sequelize-join-with-multiple-column
                    model : Airport,
                    as : 'departureAirport',
                    on: {
                        col1: Sequelize.where(Sequelize.col("Flight.departureAirportId"), "=",Sequelize.col("departureAirport.code"))
                    }
                },
                {
                    model : Airport,
                    as : 'arrivalAirport',
                    on : {
                        col1 : Sequelize.where(Sequelize.col("Flight.arrivalAirportId"), "=", Sequelize.col("arrivalAirport.code"))
                    }
                }

            ],
    })
        return response;
    }
}

module.exports = FlightRepository;