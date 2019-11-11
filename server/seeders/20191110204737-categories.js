'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Clean Energy',
        icon: 'charging-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Local Food',
        icon: 'car-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Resources',
        icon: 'globe-2-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Waste',
        icon: 'trash-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Communities',
        icon: 'bulb-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Education',
        icon: 'people-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Categories', null, {});
  }
};
