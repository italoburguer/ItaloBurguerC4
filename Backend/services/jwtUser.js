const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY_USER = "xxXXxxXXxx";

exports.createAccesTokenUser = function(user){
    const payloadUser = {
        id: user._id,
        nombre: user.nombre,
        apellido: user.apellido,
        email: user.email,
        telefono: user.telefono,
        direccion: user.direccion,
        createTokenUser: moment().unix(),
        exp: moment().add(3, "hours").unix()
    };

    return jwt.encode(payloadUser, SECRET_KEY_USER);
};

exports.createRefreshTokenUser = function(user){
    const payloadUser = {
        id: user._id,
        exp: moment().add(30, "days").unix()
    };

    return jwt.encode(payloadUser, SECRET_KEY_USER);

};

exports.decodedTokenUser = function(tokenUser){
    return jwt.decode(tokenUser, SECRET_KEY_USER, true);
};