'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define('Project', {
    projectName: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    startDate: DataTypes.INTEGER,
    endDate: DataTypes.INTEGER
  }, {});
  Project.associate = function(models) {
    Project.belongsToMany(models.User, {through: 'UserProjects', foreignKey: 'projectID', as: 'contributer'})
    Project.belongsToMany(models.Category, {through: 'ProjectRelations', foreignKey: 'categoryID', as: 'listing'})
    Project.belongsToMany(models.Indicator, {through: 'ProjectIndicators', foreignKey: 'indicatorID', as: 'measurement'})
  };
  return Project;
};
