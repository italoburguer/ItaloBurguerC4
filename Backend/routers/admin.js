const express = require('express');
const AdminController = require('../controllers/adminController');

const api = express.Router();

api.post("/registro", AdminController.signUp);

module.exports = api;