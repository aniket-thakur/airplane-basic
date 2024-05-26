'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.addConstraint('Airports',{
      fields : ['cityId'],
      type : 'foreign key',
      name : 'city_foreignKey_constraint',
      references : {
        table : 'Cities',
        field : 'id'
      }, 
      onDelete : 'cascade',
      onUpdate : 'cascade'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.removeConstraint('Airports', 'city_foreignKey_constraint',)
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
