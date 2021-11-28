const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");

function registro(req, res){
    const user = new User();

    const {nombre, apellido, email, password, pass2, telefono, direccion} = req.body;
    user.nombre = nombre;
    user.apellido = apellido;
    user.email = email.toLowerCase();
    user.telefono = telefono;
    user.direccion = direccion;

    if(!password || !pass2){
        res.status(404).send({
            message: "Ingrese todos los campos"
        });
    }else{
       if(password != pass2){
           res.status(404).send({
               message: "Las contraseñas deben de coincidir"
           });
       }else{
           bcrypt.hash(password, null, null, function(err, hash){
                if(err){
                    res.status(500).send({
                        message: "Server Error"
                    });
                }else{
                    user.password = hash;
                    user.save((err, usuarioStored) =>{
                        if(err){
                            res.status(500).send({
                                message: "Email ya registrado"
                            });
                        }else{
                            if(!usuarioStored){
                                res.status(404).send({
                                    message: "Error servidor"
                                });
                            }else{
                                res.status(200).send({
                                    user: usuarioStored
                                })
                            }
                        }
                    });
                }
           });
       }
    }
}

function inicioSesion(req, res){
    console.log("ok")
}

module.exports = {
    registro,
    inicioSesion,
}