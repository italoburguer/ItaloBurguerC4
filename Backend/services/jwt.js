const jwt = require("jwt-simple");
const moment = require("moment");

const SECRET_KEY = "XxX";

exports.createAccesToken = function(admin){
    const payload = {
        id: admin._id,
        nombre: admin.nombre,
        apellido: admin.apellido,
        email: admin.email,
        createToken: moment().unix(),
        exp: moment().add(3, "hours").unix()
    }

    return jwt.encode(payload, SECRET_KEY);
}

exports.createRefreshToken = function(admin){
    const payload = {
        id: admin._id,
        exp: moment().add(20, "days").unix()
    };

    return jwt.encode(payload, SECRET_KEY);
};

exports.decodedToken = function(token){
    return jwt.decode(token, SECRET_KEY, true);
}