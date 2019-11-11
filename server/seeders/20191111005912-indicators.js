'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Indicators', [
         {
           categoryId: 1,
           name: 'Electricity: Renewable/Clean',
           unit: '%',
           description: '% Renewable Energy generated statewide',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Average Fuel Use Per Person/Annually',
           unit: '$ per year',
           description: 'Dollars spent per person on imported fuel per year',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Greenhouse Gas Emissions',
           unit: '',
           description: 'Gas emissions by source/sector',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Total Energy Use',
           unit: 'Barrels (thousands)',
           description: 'Total petroleum use by sector (Thousand barrels)',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Transportation',
           unit: 'Gallons',
           description: 'Fuel use for electricity, ground, and air transportation',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Local Foods Production',
           unit: 'Pounds',
           description: 'Pounds of local food produced annually',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Labor & Land resources',
           unit: 'Acres',
           description: 'Acres of farm land in use',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Processing',
           unit: 'facilities',
           description: 'Number of agricultural processing facilities',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Distribution',
           unit: '# Farmers Markets Statewide',
           description: 'Distribution of local foods statewide',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Consumption',
           unit: 'Dollars of Agricultural Products Sold',
           description: 'Value of crop/livestock/aquaculture sales in Hawai\'i',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: 'Percent water used per county by sector',
           unit: 'Million Gallons per Day',
           description: 'Water used by county and wastewater successfully recycled',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: "Land Cover of Burned areas in Hawai'i",
           unit: 'Acres',
           description: "Land cover of burned areas in Hawai'i",
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: 'Invasive Species Control',
           unit: 'Percent action items in implementation process',
           description: 'annual funding necessary to implement projects',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: 'Native Species Managed',
           unit: '%',
           description: 'Percent Native Species Managed listed as threatened or endangered',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 4,
           name: 'Total solid waste reduction',
           unit: 'tons',
           description: 'Total solid waste reduction with H-power',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 4,
           name: 'Recycling (type)',
           unit: 'Tons',
           description: 'Tons of recycled/composted material by county',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 4,
           name: 'Estimated Tons of materials diverted',
           unit: 'Tons',
           description: 'Material that is reused instead of being thrown away',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 5,
           name: 'Total Annual vehicle miles travelled',
           unit: 'VMT',
           description: 'Mobility & Accessibility, annual number of miles driven in Hawaii',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 5,
           name: 'Economic Prosperity',
           unit: '%',
           description: 'Percentage of households below the self-sufficiency standard',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 5,
           name: 'Overall Social Vulnerability Index by County',
           unit: '',
           description: 'Overall Social Vulnerability Index by County',
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
