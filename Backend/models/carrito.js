const moongose = require("mongoose");
const Schema = moongose.Schema;

const CarritoSchame = Schema({
  fecha: {type: Date, default:Date.now},
  totalPagar: {type: String},
  user: {type: String}
});

module.exports = moongose.model("Carrito", CarritoSchame);