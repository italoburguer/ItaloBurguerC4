const Plato = require("../models/plato");

function createPlato(req, res){
   const body = req.body;
   const plato = new Plato(body);
   plato.order = 1;

   plato.save((err, platoStored) => {
       if(err){
           res.status(400).send({
               code: 400, 
               message: ""
           });
       }else{
           if(!platoStored){
               res
                .status(400)
                .send({
                    code: 400, 
                    message: "No se ha creado el platillo"
                });
           }else{
               res
                .status(200)
                .send({
                    code: 200,
                    message: "Platillo creado exitoxamente."
                });
           }
       }
   });
}

function getPlato(req, res){
    Plato.find().sort({
        order: "asc"
    }).exec((err, platoStored) =>{
        if(err){
            res.status(500).send({
                code: 500,
                message:"Server Error."
            });
        }else{
            if(!platoStored){
                res.status(404).send({
                    code: 404,
                    message: "Platillo no encontrado."
                });
            }else{
                res.status(200).send({
                    code: 200,
                    plato: platoStored
                });
            }
        }
    });
}

function deletePlato(req, res){
    const { id } = req.params;
    
    Plato.findByIdAndRemove(id, (err, platoDeleted) =>{
        if(err){
            res.status(500).send({
                code:500,
                message: "Error Server."
            });
        }else{
            if(!platoDeleted){
                res.status(404).send({
                    code: 404,
                    message: "Platillo no encontrado."
                });
            }else{
                res.status(200).send({
                    code: 200, 
                    message: "Platillo eliminado correctamente."
                });
            }
        }
    });
}

function updatePlato(req, res){
    const platoData = req.body;
    const id = req.params.id;

    Plato.findByIdAndUpdate(id, platoData, (err, platoUpdate)=>{
        if(err){
            res.status(500).send({
                code: 500,
                message: "Error Server."
            });
        }else{
            if(!platoUpdate){
                res.status(404).send({
                    code: 404,
                    message: "No se ha encontrando el platillo."
                });
            }else{
                res.status(200).send({
                    code: 200,
                    message: "Platillo actulizado correctamente."
                });
            }
        }
    });
}

module.exports = {
    createPlato,
    getPlato,   
    deletePlato,
    updatePlato
}