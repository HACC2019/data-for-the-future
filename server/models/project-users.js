'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectUsers = sequelize.define('ProjectUser', {
    userID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER
  }, {});
  projectUsers.associate = function(models) {
    projectUsers.belongsTo(models.User, {foreignKey: 'id'})
    projectUsers.belongsTo(models.Project, {foreignKey: 'id'})
  };
  return UserProject;
};
