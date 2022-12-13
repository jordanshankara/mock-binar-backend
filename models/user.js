'use strict';
const {
  Model
} = require('sequelize');
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      this.hasOne(models.ToDoList, {
        foreignKey: "user_id",
      });
    }

    generateToken = () => {
      const payload = {
        id: this.id,
      };
      const rahasia = "Ini rahasia ga boleh disebar-sebar";
      const token = jwt.sign(payload, rahasia);
      return token;
    };

    // static #encrypt = (password) => bcrypt.hashSync(password, 10);

    static register = ({ usercode }) => {
      // const encryptedPassword = this.#encrypt(password);
      return this.create({
        usercode,
        // password: encryptedPassword,
        // role: "player",
      });
    };

    // checkPassword = (password) => bcrypt.compareSync(password, this.password);

    static authenticate = async ({ usercode }) => {
      try {
        const user = await this.findOne({ where: { usercode } });
        if (!user) return Promise.reject("User not found!");
        // const isPasswordValid = user.checkPassword(password);
        // if (!isPasswordValid) return Promise.reject("Wrong password");
        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };
  }
  User.init(
    {
      usercode: {
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};