'use strict';
module.exports = (sequelize, DataTypes) => {
  const project_relation = sequelize.define('project_relation', {
    ProjectRelationID: DataTypes.INTEGER,
    ProjectID: DataTypes.INTEGER,
    ProjectName: DataTypes.STRING,
    CategoryID: DataTypes.INTEGER,
    ActivityID: DataTypes.INTEGER
  }, {});
  project_relation.associate = function(models) {
    // associations can be defined here
  };
  return project_relation;
};