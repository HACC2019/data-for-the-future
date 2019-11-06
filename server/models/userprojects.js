'use strict';
module.exports = (sequelize, DataTypes) => {
  const userprojects = sequelize.define('userprojects', {
    UserID: DataTypes.INTEGER,
    ProjectID: DataTypes.INTEGER
  }, {});
  userprojects.associate = function(models) {
    // associations can be defined here
  };
  return userprojects;
};