const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PlatoSchema = Schema({
    nombre: {type: String, require},
    precio: {type: Number, require},
    imagen: {type: String},
    descripcion: {type: String}
});

module.exports = mongoose.model("Plato", PlatoSchema);