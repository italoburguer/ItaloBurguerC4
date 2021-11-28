const express = require("express");
const UserController = require("../controllers/userController");

const api = express.Router();

api.post("/registro-user", UserController.registro);
api.post("/inicio-user", UserController.inicioSesion);
module.exports = api;