'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectRelation = sequelize.define('projectRelation', {
    projectRelationID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER,
    projectName: DataTypes.STRING,
    categoryID: DataTypes.INTEGER,
    activityID: DataTypes.INTEGER
  }, {});
  projectRelation.associate = function(models) {
    // associations can be defined here
  };
  return projectRelation;
};
