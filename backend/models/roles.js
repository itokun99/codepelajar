'use strict';
module.exports = (sequelize, DataTypes) => {
  const Roles = sequelize.define('Roles', {
    name: DataTypes.STRING,
    status: DataTypes.TINYINT
  }, {});
  Roles.associate = function(models) {
    // associations can be defined here
  };
  return Roles;
};