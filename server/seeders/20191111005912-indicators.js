'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
       return queryInterface.bulkInsert('Indicators', [
         {
           categoryId: 1,
           name: "Hawai'i Renewable Portfolio Standards by Utility/County",
           unit: 'RPS',
           description: 'by Utility/County',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: "Hawai‘i Renewable Energy Generation by Utility/County",
           unit: 'kW Hours',
           description: 'by Utility/County',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: "Hawai'i Renewable Energy Generation by Source",
           unit: 'kW Hours',
           description: 'by Source',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Energy Efficiency Portfolio Savings',
           unit: '',
           description: '',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'ENERGY STAR Buildings',
           unit: 'latitude/longitude',
           description: "of buildings",
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Dollars spent on petroleum',
           unit: '$',
           description: 'per person total',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Average Energy use (household)',
           unit: 'kW Hours',
           description: 'per household',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Average Energy use by County',
           unit: 'kW Hours',
           description: 'per household by County',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Emissions inventory for Energy Sector',
           unit: 'tons',
           description: 'of greenhouse gasses emitted',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'energy emissions by source',
           unit: 'tons',
           description: 'of greenhouse gasses emitted',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'stationary combustion emissions by economic sector',
           unit: 'tons',
           description: 'of greenhouse gasses emitted',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'transportation emissions by End-Use Sector',
           unit: 'tons',
           description: 'of greenhouse gasses emitted',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Power Plant emissions',
           unit: 'tons',
           description: 'of greenhouse gasses emitted',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Total petroleum use by sector',
           unit: 'Barrels (thousand)',
           description: 'of petroleum used',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Average Fuel Use Per Person/Annually',
           unit: '$',
           description: 'spent on petroleum per person per year',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 1,
           name: 'Transportation',
           unit: 'Gallons',
           description: 'of fuel used for electric, ground, and air transportation',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Local Foods Production',
           unit: 'Pounds',
           description: 'of local food produced annually',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Labor & Land resources',
           unit: 'Acres',
           description: 'of farm land in use',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Processing',
           unit: '#',
           description: "of agricultural processing facilities on Hawai'i",
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Distribution',
           unit: '#',
           description: 'of Farmers Markets statewide',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 2,
           name: 'Consumption',
           unit: '$',
           description: 'of crop/livestock/aquaculture sales in Hawai\'i',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: 'Percent water used per county by sector',
           unit: 'Million Gallons',
           description: 'of water used by county per year',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: "Land Cover of Burned areas in Hawai'i",
           unit: 'Acres',
           description: "of land cover of burned areas in Hawai'i",
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: 'Invasive Species Control',
           unit: '%',
           description: 'action items in implemtatation process',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 3,
           name: 'Native Species Managed',
           unit: '%',
           description: 'of native species listed as threatened or endangered',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 4,
           name: 'Total solid waste reduction',
           unit: 'tons',
           description: 'of solid waste reduced with H-power',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 4,
           name: 'Recycling (type)',
           unit: 'Tons',
           description: 'of recycled/composted material by county',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 4,
           name: 'Estimated Tons of materials diverted',
           unit: 'Tons',
           description: 'of material that is reused',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 5,
           name: 'Total Annual vehicle miles travelled',
           unit: 'VMT (Vehicle Miles Travelled)',
           description: 'in Hawaii',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 5,
           name: 'Economic Prosperity',
           unit: '%',
           description: 'of households below the self-sufficiency standard',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
           categoryId: 5,
           name: 'Overall Social Vulnerability Index by County',
           unit: 'SVI (Social Vulnerability Index)',
           description: 'by County',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         {
          categoryId: 6,
          name: 'Number of public schools participating in initiative',
          unit: 'schools',
          description: '',
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
