const express = require("express");
const AuthUserController = require("../controllers/auth.userController");

const api = express.Router();

api.post("/refresh-access-token-usuario", AuthUserController.refreshAccesTokenUser);

module.exports = api; 