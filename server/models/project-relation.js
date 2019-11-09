'use strict';
module.exports = (sequelize, DataTypes) => {
  const project-relation = sequelize.define('project-relation', {
    projectRelationID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER,
    projectName: DataTypes.STRING,
    categoryID: DataTypes.INTEGER,
    activityID: DataTypes.INTEGER
  }, {});
  project-relation.associate = function(models) {
    // associations can be defined here
  };
  return project-relation;
};
