'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [
      {
        name: 'Clean Energy',
        icon: 'charging-outline',
        description: '70% clean energy – 40% from renewable sources and 30% from efficiency, with a view towards 100% renewable energy by 2045',
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
        name: 'Natural Resource Management',
        icon: 'globe-2-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Waste Reduction',
        icon: 'trash-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Smart Sustainable Communities',
        icon: 'bulb-outline',
        description: 'Sustainability is the name of the game.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Green Workforce & Education',
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
