'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectMaster = sequelize.define('projectMaster', {
    ProjectID: DataTypes.INTEGER,
    ProjectName: DataTypes.STRING,
    ContactUserID: DataTypes.INTEGER,
    Longitude: DataTypes.FLOAT,
    Latitude: DataTypes.FLOAT,
    StartDate: DataTypes.INTEGER,
    EndDate: DataTypes.INTEGER
  }, {});
  projectMaster.associate = function(models) {
    // associations can be defined here
  };
  return projectMaster;
};