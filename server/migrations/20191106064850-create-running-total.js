'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('runningTotals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      runningTotalID: {
        type: Sequelize.INTEGER
      },
      indicatorID: {
        type: Sequelize.INTEGER
      },
      indicatorName: {
        type: Sequelize.STRING
      },
      unitOfMeasurement: {
        type: Sequelize.STRING
      },
      runningTotal: {
        type: Sequelize.FLOAT
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
    return queryInterface.dropTable('runningTotals');
  }
};
