'use strict';
module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('Project', {
    name: DataTypes.STRING,
    summary: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    endsDate: DataTypes.INTEGER
  }, {});
  project.associate = function(models) {
    project.belongsToMany(models.User, {through: 'UserProjects', foreignKey: 'projectID', as: 'contributor'})
    project.belongsToMany(models.Category, {through: 'ProjectRelations', foreignKey: 'categoryID', as: 'listing'})
    project.belongsToMany(models.Indicator, {through: 'ProjectIndicators', foreignKey: 'indicatorID', as: 'measurement'})
  };
  return project;
};
