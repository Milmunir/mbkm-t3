'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require("../helpers/bcrypt")

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: "Username can't be empty!"
        },
        unique: {
          args: true,
          msg: "Username not available!"
        },
        notNull: true
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        args: true,
        msg: "Email not available!"
      }
    },
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    hooks: {
      beforeCreate: (user) => {
        const hashedPass = hashPassword(user.password)
        user.password = hashedPass
      }
    }
  });
  return User;
};