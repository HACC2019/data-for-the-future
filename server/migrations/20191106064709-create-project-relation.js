'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('project_relations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ProjectRelationID: {
        type: Sequelize.INTEGER
      },
      ProjectID: {
        type: Sequelize.INTEGER
      },
      ProjectName: {
        type: Sequelize.STRING
      },
      CategoryID: {
        type: Sequelize.INTEGER
      },
      ActivityID: {
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
    return queryInterface.dropTable('project_relations');
  }
};