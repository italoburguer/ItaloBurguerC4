const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    nombre: {type: String},
    apellido: {type: String},
    email:{type: String, unique:true},
    password: {type: String},
    pedido: [
        {
            idPlato: {type: Schema.ObjectId, ref:'Plato', autopopulate: true}
        }
    ]
});


UserSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model("User", UserSchema);