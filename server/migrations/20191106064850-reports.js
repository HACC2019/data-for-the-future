'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Reports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      indicatorID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Indicators',
          key: 'id'
        }
      },
      projectID: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Projects',
          key: 'id'
        }
      },
      metric: {
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
    return queryInterface.dropTable('Reports');
  }
};
