const express = require('express');
const AdminController = require('../controllers/adminController');

const api = express.Router();

api.post("/registro", AdminController.signUp);
api.post("/login", AdminController.login);

module.exports = api;