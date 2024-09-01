'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert("Seats",[
      {
      airplaneId : 2,
      row :  1,
      cols: "A",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  1,
      cols: "B",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  1,
      cols: "C",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  1,
      cols: "D",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  1,
      cols: "E",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  1,
      cols: "F",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  2,
      cols: "A",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  2,
      cols: "B",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  2,
      cols: "C",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  2,
      cols: "D",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row :  2,
      cols: "E",
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      airplaneId : 2,
      row : 2,
      cols: "F",
      createdAt : new Date(),
      updatedAt : new Date()
    },
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
