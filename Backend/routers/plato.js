const express = require("express");
const PlatoController = require("../controllers/platoController");

const md_auth = require("../middlewares/authenticated");

const api = express.Router();

api.post("/add-plato", [md_auth.ensureAuth],PlatoController.createPlato);
api.get("/get-plato", PlatoController.getPlato);
api.delete("/delete-plato/:id", [md_auth.ensureAuth], PlatoController.deletePlato);
api.put("/update-plato/:id", [md_auth.ensureAuth], PlatoController.updatePlato);
module.exports = api;