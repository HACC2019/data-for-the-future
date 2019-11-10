'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Energy',
      },
      {
        name: 'Food',
      },
      {
        name: 'Natural Resource Management',
      },
      {
        name: 'Waste',
      },
      {
        name: 'Communities',
      },
      {
        name: 'Education & Workforce',
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
