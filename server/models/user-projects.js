'use strict';
module.exports = (sequelize, DataTypes) => {
  const userProjects = sequelize.define('userProjects', {
    userID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER
  }, {});
  userProjects.associate = function(models) {
    // associations can be defined here
  };
  return userProjects;
};
