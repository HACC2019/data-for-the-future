'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectCategory = sequelize.define('ProjectCategory', {
    projectID: DataTypes.INTEGER,
    categoryID: DataTypes.INTEGER,
  }, {});
  ProjectRelation.associate = function(models) {
    ProjectCategory.belongsTo(models.Project, {foreignKey: 'id'})
    ProjectCategory.belongsTo(models.Category, {foreignKey: 'id'})
  };
  return ProjectCategory;
};
