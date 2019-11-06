'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('indicator_relations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProjectIndicatorID: {
        type: Sequelize.INTEGER
      },
      ProjectID: {
        type: Sequelize.INTEGER
      },
      IndicatorID: {
        type: Sequelize.INTEGER
      },
      MetricMeasurement: {
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
    return queryInterface.dropTable('indicator_relations');
  }
};