'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ProjectUsers', [
         {
            userId: 1,
            projectId: 1,
            createdAt: new Date(2019,11,12),
            updatedAt: new Date()
         },
         {
            userId: 1,
            projectId: 2,
            createdAt: new Date(2019,11,12),
            updatedAt: new Date()
         },
         {
            userId: 2,
            projectId: 1,
            createdAt: new Date(2019,11,12),
            updatedAt: new Date()
         },
         {
            userId: 3,
            projectId: 3,
            createdAt: new Date(2019,11,12),
            updatedAt: new Date()
         },
         {
            userId: 3,
            projectId: 4,
            createdAt: new Date(2019,11,12),
            updatedAt: new Date()
         },
         {
            userId: 4,
            projectId: 1,
            createdAt: new Date(2019,11,12),
            updatedAt: new Date()
         },
         {
            userId: 4,
            projectId: 5,
            createdAt: new Date(2019,11,12),
            updatedAt: new Date()
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
