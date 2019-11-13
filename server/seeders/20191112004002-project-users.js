'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ProjectUsers', [
         {
            userId: 1,
            projectId: 1
         },
         {
            userId: 1,
            projectId: 2
         },
         {
            userId: 2,
            projectId: 1
         },
         {
            userId: 3,
            projectId: 3
         },
         {
            userId: 3,
            projectId: 4
         },
         {
            userId: 4,
            projectId: 1
         },
         {
            userId: 4,
            projectId: 5
         },
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
