const moongose = require("mongoose");
const Schema = moongose.Schema;

const CarritoSchame = Schema({
  nombreUsuario:{type: String},
  direccionUsuario:{},
  fecha: {type: Date},
  productos:[
    {
      nombrePlato: {type:String},
      precioPlato: {type:Number},
      cantidadPlato: {type:Number}
    }
  ],
  totalPagar: {type: Number}
});

module.exports = moongose.model("Carrito", CarritoSchame);