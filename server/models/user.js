'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    profilePic: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.Project, {through: 'ProjectUsers', foreignKey: 'userID', as: 'projects'})
  };
  return user;
};
