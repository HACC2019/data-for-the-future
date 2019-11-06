'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    UserID: DataTypes.INTEGER,
    Username: DataTypes.STRING,
    Email: DataTypes.STRING,
    First: DataTypes.STRING,
    Last: DataTypes.STRING,
    ProfilePic: DataTypes.INTEGER,
    PhoneNumber: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};