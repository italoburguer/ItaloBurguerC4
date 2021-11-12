const express = require("express");
const AuthController = require("../controllers/authController");

const api = express.Router();

api.post("/refresh-access-token", AuthController.refreshAccesToken);

module.exports = api;