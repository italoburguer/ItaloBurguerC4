const bcrypt = require ("bcrypt-nodejs");
const Admin = require ('../models/admin');

function signUp(req, res){
    const admin = new Admin();

    const { nombre, email, password, repeatPassword } = req.body;
    admin.nombre = nombre;
    admin.email = email;

    if(!password || !repeatPassword){
        res.status(404).send({
            message: "Rellene los campos.",
        });   
    }else{
        if(password !== repeatPassword){
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

module.exports = {
    signUp
}