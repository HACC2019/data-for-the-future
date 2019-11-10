'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectMaster = sequelize.define('projectMaster', {
    projectID: DataTypes.INTEGER,
    projectName: DataTypes.STRING,
    contactUserID: DataTypes.INTEGER,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    startDate: DataTypes.INTEGER,
    endDate: DataTypes.INTEGER
  }, {});
  projectMaster.associate = function(models) {
    // associations can be defined here
  };
  return projectMaster;
};
