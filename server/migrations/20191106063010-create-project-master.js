'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('projectMasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProjectID: {
        type: Sequelize.INTEGER
      },
      ProjectName: {
        type: Sequelize.STRING
      },
      ContactUserID: {
        type: Sequelize.INTEGER
      },
      Longitude: {
        type: Sequelize.FLOAT
      },
      Latitude: {
        type: Sequelize.FLOAT
      },
      StartDate: {
        type: Sequelize.INTEGER
      },
      EndDate: {
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
    return queryInterface.dropTable('projectMasters');
  }
};