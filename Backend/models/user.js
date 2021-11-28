const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre: {type: String},
    apellido: {type: String},
    email:{type: String, unique:true},
    password: {type: String},
    telefono: {type: String},
    direccion: {type: String}
});


UserSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("User", UserSchema);