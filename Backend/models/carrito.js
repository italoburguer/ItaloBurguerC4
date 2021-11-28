const moongose = require("mongoose");
const Schema = moongose.Schema;

const CarritoSchame = Schema({
  fecha: {type: Date, default:Date.now},
  productos:[
    {
      plato: {type: Schema.ObjectId, ref: 'Plato'},
      nombrePlato: {type: String},
      cantidadPlato: {type: Number},
      precioPlato: {type: Number},
    }
  ],
  totalPagar: {type: Number},
  user: {type: String}
});

module.exports = moongose.model("Carrito", CarritoSchame);