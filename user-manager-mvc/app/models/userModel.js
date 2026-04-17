// app/models/userModel.js
const { v4: uuidv4 } = require('uuid');

class User {
  static users = [];

  constructor(name, email, linkImg) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.linkImg = linkImg;
  }

  static findAll() {
    return User.users;
  }

  static create(name, email, linkImg) {
    const newUser = new User(name, email, linkImg);
    User.users.push(newUser);
    return newUser;
  }

  static findById(id) {
    for (let i = 0; i < User.users.length; i++) {
      if (User.users[i].id === parsedId) {
        return User.users[i];
      }
    }

    return undefined;
  }

  static delete(id) {
    let newUsers = [];

    for (let i = 0; i < User.users.length; i++) {
      if (User.users[i].id !== parsedId) {
        newUsers.push(User.users[i]);
      }
    }

    User.users = newUsers;
  }
}

module.exports = User;