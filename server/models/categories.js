'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    category.belongsToMany(models.Project, {through: 'ProjectRelations', foreignKey: 'projectID', as: 'origin'})
  };
  return category;
};
