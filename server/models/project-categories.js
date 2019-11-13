'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectCategory = sequelize.define('ProjectCategory', {
    projectId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  }, {});
  projectCategory.associate = function(models) {
    projectCategory.belongsTo(models.Project, {foreignKey: 'id'})
    projectCategory.belongsTo(models.Category, {foreignKey: 'id'})
  };
  return projectCategory;
};
