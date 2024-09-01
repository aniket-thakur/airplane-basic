'use strict';
const {Enums} = require("../utils/common")
const {BUSINESS,ECONOMY,PREMIUM_ECONOMY,FIRST_CLASS} = Enums.SEAT_TYPE
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Seats extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey : 'airplaneId'
      })
    }
  }
  Seats.init({ 
    airplaneId: {
      type : DataTypes.INTEGER,
      allowNull  : false,
    } ,
    row: {
      type : DataTypes.INTEGER,
      allowNull : false
    },
    cols: {
      type : DataTypes.STRING,
      allowNull : false
    },
    type: {
      type : DataTypes.ENUM,
      values : [BUSINESS,ECONOMY,FIRST_CLASS,PREMIUM_ECONOMY],
      defaultValue : ECONOMY,
      allowNull : false
  }, 
},
{
    sequelize,
    modelName: 'Seats',
  });
  return Seats;
};