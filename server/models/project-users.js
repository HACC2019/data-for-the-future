'use strict';
module.exports = (sequelize, DataTypes) => {
  const projectUser = sequelize.define('ProjectUser', {
    userID: DataTypes.INTEGER,
    projectID: DataTypes.INTEGER
  }, {});
  projectUsers.associate = function(models) {
    projectUser.belongsTo(models.User, {foreignKey: 'id'})
    projectUser.belongsTo(models.Project, {foreignKey: 'id'})
  };
  return projectUser;
};
