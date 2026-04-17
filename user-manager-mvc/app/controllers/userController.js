// app/controllers/userController.js
const userRepository = require('../repositories/userRepository');

exports.home = (req, res) => {
  res.render('index');
};

exports.listUsers = (req, res) => {
  const users = userRepository.findAll();
  res.render('users', { users });
};

exports.createUser = (req, res) => {
  const { name, email, linkImg } = req.body;
  userRepository.create(name, email, linkImg);
  res.redirect('/users');
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  userRepository.delete(id);
  res.redirect('/users');
};