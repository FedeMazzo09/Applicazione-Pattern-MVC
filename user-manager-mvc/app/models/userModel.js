// app/models/user.js
const { v4: uuidv4 } = require('uuid');

class User {
  constructor(name, email, linkImg, prezzo, disponibilità) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.linkImg = linkImg;
    this.prezzo = prezzo;
    this.disponibilità = disponibilità;
  }
}

module.exports = User;