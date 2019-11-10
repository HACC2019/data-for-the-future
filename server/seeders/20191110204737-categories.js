'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Clean Energy',
        icon: 'charging-outline',
        description: 'Sustainability is the name of the game.'
      },
      {
        name: 'Local Food',
        icon: 'car-outline',
        description: 'Sustainability is the name of the game.'
      },
      {
        name: 'Resources',
        icon: 'globe-2-outline',
        description: 'Sustainability is the name of the game.'
      },
      {
        name: 'Waste',
        icon: 'trash-outline',
        description: 'Sustainability is the name of the game.'
      },
      {
        name: 'Communities',
        icon: 'bulb-outline',
        description: 'Sustainability is the name of the game.'
      },
      {
        name: 'Education',
        icon: 'people-outline',
        description: 'Sustainability is the name of the game.'
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
