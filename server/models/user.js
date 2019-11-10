'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userID: DataTypes.INTEGER,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    profilePic: DataTypes.INTEGER,
    phoneNumber: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
