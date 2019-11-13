'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ProjectCategories', [
        {
          projectId: 1,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 2,
          categoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 3,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 4,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 5,
          categoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 6,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 1,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          projectId: 5,
          categoryId: 1,
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
      */
     return queryInterface.bulkDelete('ProjectCategories', null, {});
  }
};
