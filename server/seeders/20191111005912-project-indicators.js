'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Indicators', [
         {
           categoryId: 1,
           name: 'Energy Generated',
           unit: '%',
           description: '% Renewable Energy generated statewide',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Food produced',
           unit: 'Pounds',
           description: 'Pounds of local food produced annually',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: 'Water used',
           unit: '%',
           description: '% water used per county by sector',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 4,
           name: 'Recycling (type)',
           unit: 'pounds (lb)',
           description: 'Pounds of material recycled by type',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 5,
           name: 'Affordability index (transport)',
           unit: '%',
           description: '% of income for Housing+Transportation',
           createdAt: new Date(),
           updatedAt: new Date()
         }
       ], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
       return queryInterface.bulkDelete('Indicators', null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
