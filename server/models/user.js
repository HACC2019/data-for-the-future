'use strict';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    profilePic: DataTypes.STRING,
    phoneNumber: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    user.belongsToMany(models.Project, {through: 'ProjectUsers', foreignKey: 'userId', as: 'projects'})
  };
  return user;
};
