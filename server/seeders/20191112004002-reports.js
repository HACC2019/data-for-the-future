'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Reports', [
        {
           indicatorId: 1,
           projectId: 1,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 2,
           projectId: 1,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 17,
           projectId: 2,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 18,
           projectId: 2,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 22,
           projectId: 3,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 23,
           projectId: 3,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 26,
           projectId: 4,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 27,
           projectId: 4,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 29,
           projectId: 5,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 30,
           projectId: 5,
           metric: 600000,
           createdAt: new Date(),
           updatedAt: new Date()
        },
        {
           indicatorId: 32,
           projectId: 6,
           metric: 600000,
           createdAt: new Date(),
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
