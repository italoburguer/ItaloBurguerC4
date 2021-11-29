const jwt = require('../services/jwtUser');
const moment = require("moment");
const User = require("../models/user");

function willExpiredTokenUser(token){
    const {exp} = jwt.decodedTokenUser(token);
    const currentDate = moment().unix();

    if(currentDate > exp){
        return true;
    }
    return false;
}

function refreshAccesTokenUser(req, res){
    const { refreshTokenUser } = req.body;
    const isTokenExpiredUser = willExpiredTokenUser(refreshTokenUser);
    
    if(isTokenExpiredUser){
        res.status(404).send({
            message: "Refresh Token Expired"
        });
    }else{
        const {id} = jwt.decodedTokenUser(refreshTokenUser);

        User.findOne({_id:id}, (err, usuarioStored) =>{
            if(err){
                res.status(500).send({
                    message: "Server Error"
                });
            }else{
                if(!usuarioStored){
                    res.status(404).send({
                        message: "Usuario no encontrado"
                    });
                }else{
                    res.status(200).send({
                        accessTokenUser: jwt.createAccesTokenUser(usuarioStored),
                        refreshTokenUser: refreshTokenUser
                    })
                }
            }
        });
    }
}

module.exports = {
    refreshAccesTokenUser
}