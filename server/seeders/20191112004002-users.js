'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
        {
           username: "2coolforskool",
           email: "notreal@biscuits.com",
           first: "Bob",
           last: "Moss",
           profilePic: "https://assets.wordpress.envato-static.com/uploads/2017/08/tropical-PS53BSA.jpg",
           phoneNumber: 8082000000
        },
        {
           username: "right",
           email: "notreal@biscuits.com",
           first: "Kelly",
           last: "Moss",
           profilePic: "https://science.psu.edu/alert/photos/miscphotos/SchusterMiller/elephant.jpg/image_preview",
           phoneNumber: 8082000000
        },
        {
           username: "notaHacker",
           email: "not@biscuits.com",
           first: "Call",
           last: "John",
           profilePic: "https://i.ytimg.com/vi/1hR6lT2LBWI/maxresdefault.jpg",
           phoneNumber: 8002555555
        },
        {
           username: "findersKeepers",
           email: "fake@royalty.com",
           first: "Porter",
           last: "Get",
           profilePic: "https://ichef.bbci.co.uk/news/660/media/images/77246000/jpg/_77246627_fa4891a6-ccf8-4c8f-9e32-f1a80cdcdf4c.jpg",
           phoneNumber: 0000000000
        },
        {
           username: "effort",
           email: "is@awesome.com",
           first: "Abyss",
           last: "Nie",
           profilePic: "https://assets.wordpress.envato-static.com/uploads/2017/08/tropical-PS53BSA.jpg",
           phoneNumber: 1234567890
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
