'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProjectCategory = sequelize.define('ProjectCategory', {
    projectId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {});
  ProjectCategory.associate = function(models) {
    ProjectCategory.belongsTo(models.Project, {foreignKey: 'id'})
    ProjectCategory.belongsTo(models.Category, {foreignKey: 'id'})
  };
  return ProjectCategory;
};
