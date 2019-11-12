'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Projects', [
            {
               id: 0,
               name: "Data for the Future",
               summary: "This goal of this project is to promote sustainability for future generations",
               longitude: 42.0,
               latitude: 42.0,
               endsAt:new Date(),
               createdAt: new Date(),
               updatedAt: new Date
            }
       ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
