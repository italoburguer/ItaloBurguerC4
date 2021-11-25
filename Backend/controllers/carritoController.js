const Carrito = require("../models/carrito");

function createCarrito(req, res){
    const body = req.body;
    const carrito = new Carrito(body);
    carrito.order = 1000;
 
    carrito.save((err, carritoStored) => {
        if(err){
            res.status(400).send({
                code: 400, 
                message: ""
            });
        }else{
            if(!carritoStored){
                res
                 .status(400)
                 .send({
                     code: 400, 
                     message: "No se ha creado el carrito"
                 });
            }else{
                res
                 .status(200)
                 .send({
                     code: 200,
                     message: "Carrito creado exitoxamente."
                 });
            }
        }
    });
}

module.exports = {
    createCarrito
}