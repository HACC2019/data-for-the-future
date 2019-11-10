'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    profilePic: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER
  }, {});
  User.associate = function(models) {
    User.belongsToMany(models.Project, {through: 'UserProjects', foreignKey: 'userID', as: 'projects'})
  };
  return User;
};
