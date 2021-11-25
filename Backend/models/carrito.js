const moongose = require("mongoose");
const Schema = moongose.Schema;

const CarritoSchame = Schema({
  total:{type: Number},
  plato: {type: Schema.ObjectId, ref: "Plato"}
});

module.exports = moongose.model("Carrito", CarritoSchame);