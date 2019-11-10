'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectRelation = sequelize.define('ProjectRelation', {
    projectID: DataTypes.INTEGER,
    categoryID: DataTypes.INTEGER,
  }, {});
  ProjectRelation.associate = function(models) {
    ProjectRelation.belongsTo(models.Project, {foreignKey: 'projectID'})
    ProjectRelation.belongsTo(models.Category, {foreignKey: 'categoryID'})
  };
  return ProjectRelation;
};
