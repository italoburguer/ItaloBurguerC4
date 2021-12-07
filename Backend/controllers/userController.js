const bcrypt = require("bcrypt-nodejs");
const User = require("../models/user");
const jwtUser = require("../services/jwtUser");

function registro(req, res){
    const user = new User();

    const {nombre, apellido, email, password, pass2, telefono, direccion} = req.body;
    user.nombre = nombre;
    user.apellido = apellido;
    user.email = email;
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
                                    user: usuarioStored,
                                    message: user
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
    const params = req.body;
    const email = params.email; 
    const password = params.password;

    User.findOne({email}, (err, usuarioStored) =>{
        if(err){
            res.status(500).send({
                message: "Server Error."
            });
        }else{
            if(!usuarioStored){
                res.status(404).send({
                    message: "Este correo no ha sido registrado"
                });
            }else{
                bcrypt.compare(password, usuarioStored.password, (err, check) => {
                    if(err){
                        res.status(500).send({
                            message: "Server error."
                        });
                    }else if(!check){
                        res.status(404).send({
                            message: "La contraseña es incorrecta."
                        })
                    }else{
                        res.status(200).send({
                            accessTokenUser: jwtUser.createAccesTokenUser(usuarioStored),
                            refreshTokenUser: jwtUser.createRefreshTokenUser(usuarioStored)
                        });
                    }
                });
            }
        }
    });
}

module.exports = {
    registro,
    inicioSesion,
}