'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserProject = sequelize.define('UserProject', {
    userID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER
  }, {});
  UserProject.associate = function(models) {
    UserProject.belongsTo(models.User, {foreignKey: 'userID'})
    UserProject.belongsTo(models.Project, {foreignKey: 'projectID'})
  };
  return UserProject;
};
