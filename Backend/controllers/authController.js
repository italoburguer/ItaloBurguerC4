const jwt = require("../services/jwt");
const moment = require("moment");
const Admin = require("../models/admin");


//________________________ADMIN_____________________//

function checkExpiredToken(token){
    const { exp } = jwt.decodedToken(token);
    const currentDate = moment().unix();

    if(currentDate > exp){
        return true;
    }
    return false;
}

function refreshAccesToken(req, res){
   const { refreshToken } = req.body;
   const isTokenExpired = checkExpiredToken(refreshToken);
   
   if(isTokenExpired){
       res.status(404).send({
           message: "RefreshToken caducado"
       });
   }else{
       const {id} = jwt.decodedToken(refreshToken);
       Admin.findOne({_id: id}, (err, userStored) => {
           if(err){
               res.status(500).send({
                   message: "Error Server"
               });
           }else{
               if(!userStored){
                   res.status(404).send({
                       message: "Usuaio no registrado"
                   });
               }else{
                   res.status(200).send({
                       accessTokenAdmin: jwt.createAccesToken(userStored),
                       refreshTokenAdmin: refreshToken
                   });
               }
           }
       });
   }
}


module.exports = {
    refreshAccesToken,
}