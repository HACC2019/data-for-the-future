'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      UserID: {
        type: Sequelize.INTEGER
      },
      Username: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      First: {
        type: Sequelize.STRING
      },
      Last: {
        type: Sequelize.STRING
      },
      ProfilePic: {
        type: Sequelize.INTEGER
      },
      PhoneNumber: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};