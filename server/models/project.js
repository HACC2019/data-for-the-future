'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('Project', {
    name: DataTypes.STRING,
    summary: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    image: DataTypes.STRING,
    endsAt: DataTypes.DATE,
    startsAt: DataTypes.DATE
  }, {});
  project.associate = function(models) {
    project.belongsToMany(models.User, {through: 'ProjectUsers', foreignKey: 'projectId', as: 'contributor'})
    project.belongsToMany(models.Category, {through: 'ProjectCategories', foreignKey: 'categoryId', as: 'listing'})
    project.belongsToMany(models.Indicator, {through: 'ProjectIndicators', foreignKey: 'indicatorId', as: 'measurement'})
    project.hasMany(models.Report, {as: 'report'})
  };
  return project;
};
