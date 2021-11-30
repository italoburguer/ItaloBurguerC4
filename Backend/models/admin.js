const moongose = require("mongoose");
const Schema = moongose.Schema;

const AdminSchame = Schema({
    usuario: {type: String, require},
    email:{type: String, unique: true, require},
    password: {type: String, require},
});

module.exports = moongose.model("Admin", AdminSchame)