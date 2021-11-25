const express = require("express");
const carritoController = require("../controllers/carritoController");

const api = express.Router();

api.post("/add-carrito", carritoController.createCarrito);

module.exports = api;