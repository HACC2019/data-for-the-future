'use strict';
module.exports = (sequelize, DataTypes) => {
  const project-master = sequelize.define('project-master', {
    projectID: DataTypes.INTEGER,
    projectName: DataTypes.STRING,
    contactUserID: DataTypes.INTEGER,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT,
    startDate: DataTypes.INTEGER,
    endDate: DataTypes.INTEGER
  }, {});
  project-master.associate = function(models) {
    // associations can be defined here
  };
  return project-master;
};
