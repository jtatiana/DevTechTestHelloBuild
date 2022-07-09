'use strict'
import { v4 as uuidv4 } from 'uuid'
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    uuid: {
      type: DataTypes.STRING,
      defaultValue: function () { return uuidv4() }
    },
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
    frezeTableName: 'users',
    name: {
      singular: 'users',
      plural: 'users'
    }
  });
  return users;
};