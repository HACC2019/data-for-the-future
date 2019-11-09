'use strict';
module.exports = (sequelize, DataTypes) => {
  const user-projects = sequelize.define('user-projects', {
    userID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER
  }, {});
  user-projects.associate = function(models) {
    // associations can be defined here
  };
  return user-projects;
};
