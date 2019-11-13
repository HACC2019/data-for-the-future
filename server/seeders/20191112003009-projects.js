'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Projects', [
         {
            name: "Waikiki Biking",
            summary: "Lorem ipsum da da la",
            longitude: 42.0,
            latitude: 42.0,
            image: 'http://www.hawaiimagazine.com/sites/default/files/field/image/HiM1708-AY-Biki-Bikes-6377.jpg',
            endsAt:new Date(),
            createdAt: new Date(2019,11,12),
            updatedAt: new Date()
         },
         {
            name: 'KCC Farmers Market',
            summary: "Lorem ipsum da da la",
            longitude: 42.0,
            latitude: 42.0,
            image: 'https://www.hawaiiliving.com/blog/wp-content/uploads/2014/05/KCC-Farmers-Market-Sign.jpg',
            endsAt:new Date(),
            createdAt: new Date(2019,12,10),
            updatedAt: new Date()
         },
         {
            name: 'Restore the Forest',
            summary: "Lorem ipsum da da la",
            longitude: 42.0,
            latitude: 42.0,
            image: 'http://geographicconsulting.com/wp-content/uploads/2013/04/4-02Seast-640x475.jpg',
            endsAt:new Date(),
            createdAt: new Date(2019,12,30),
            updatedAt: new Date()
         },
         {
            name: "Beach Cleanup",
            summary: "Lorem ipsum da da la",
            longitude: 42.0,
            latitude: 42.0,
            image: 'https://carpwc.lbdcreative.pro/wp-content/uploads/2018/03/beachcleanup_nb-940d3801.jpeg',
            endsAt:new Date(),
            createdAt: new Date(2019,11,13),
            updatedAt: new Date()
         },
         {
            name: "Data for the Future",
            summary: "A community effort for a cleaner future",
            longitude: 42.0,
            latitude: 42.0,
            image: 'https://hknhawaii.weebly.com/uploads/7/5/3/8/7538427/published/img-0263.jpg?1571902952',
            endsAt:new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
         },
         {
            name: 'School Lunch Sorting',
            summary: "Lorem ipsum da da la",
            longitude: 42.0,
            latitude: 42.0,
            image: 'http://www.lesswaste.org.uk/wp-content/uploads/2016/03/Utilise-distro-350x220.jpg',
            endsAt:new Date(),
            createdAt: new Date(2019,11,20),
            updatedAt: new Date()
         }
      ], {});
  },

  down: (queryInterface, Sequelize) => {
     return queryInterface.bulkDelete('Projects', null, {});
  }
};
