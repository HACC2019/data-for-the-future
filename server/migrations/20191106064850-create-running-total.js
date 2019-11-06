'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RunningTotals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      RunningTotalID: {
        type: Sequelize.INTEGER
      },
      IndicatorID: {
        type: Sequelize.INTEGER
      },
      IndicatorName: {
        type: Sequelize.STRING
      },
      UnitOfMeasurement: {
        type: Sequelize.STRING
      },
      RunningTotal: {
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
    return queryInterface.dropTable('RunningTotals');
  }
};