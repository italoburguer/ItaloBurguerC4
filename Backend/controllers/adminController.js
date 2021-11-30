const bcrypt = require ("bcrypt-nodejs");
const Admin = require ('../models/admin');
const jwt = require("../services/jwt");

function signUp(req, res){
    const admin = new Admin();

    const { usuario, email, password, pass2 } = req.body;
    admin.usuario = usuario;
    admin.email = email;

    if(!password || !pass2){
        res.status(404).send({
            message: "Rellene los campos.",
        });   
    }else{
        if(password !== pass2){
            res.status(404).send({
                message: "Las contraseñas deben ser iguales",
            });
        }else{
            bcrypt.hash(password, null, null, function(err, hash){
                if(err){
                    res.status(500).send({
                        message: "Error"
                    });
                }else{
                    admin.password = hash;
                    admin.save((err, adminStored) => {
                        if(err){
                            res.status(500).send({
                                message: "Correo ya registrado."
                            });
                        }else{
                            if(!adminStored){
                                res.status(404).send({
                                    message: "Error al crear usuario"
                                });
                            }else{
                                res.status(200).send({
                                    admin: adminStored
                                });
                            }
                        }
                    });
                }
            });
        }
    }
}

function login(req, res){
    const params = req.body;
    const email = params.email;
    const password = params.password;

    Admin.findOne({email}, (err, adminStored)=>{
        if(err){
            res.status(500).send({message: "Error server"});
        }else{
            if(!adminStored){
                res.status(404).send({
                    message: "Este email no ha sido registrado"
                });
            }else{
                bcrypt.compare(password, adminStored.password, (err, valid) => {
                    if(err){
                        res.status(500).send({
                            message: "Error server"
                        });
                    }else if(!valid){
                        res.status(404).send({
                            message: "Contraseña incorrecta"
                        })
                    }else{
                        res.status(200).send({
                            accessTokenAdmin: jwt.createAccesToken(adminStored),
                            refreshTokenAdmin: jwt.createRefreshToken(adminStored)
                        });
                    }
                });
            }
        }
    });
}

module.exports = {
    signUp,
    login
}