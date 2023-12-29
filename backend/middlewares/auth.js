//Importe jsonwebtoken
const jwt = require('jsonwebtoken');

//Permet de générer un token (gererateRandomToken), 
//de parser l'en-tête "authorization" (parseAuthorization)
//et de  vérifier le token envoyé par le frontend (verifyToken)
module.exports = {
      generateRandomToken: function(user){
        return jwt.sign(
          { isAdmin: user.isAdmin,},
          'RANDOM_TOKEN_SECRET', 
          { expiresIn : '12h'})
      },
      parseAuthorization: function(authorization) {
        return (authorization != null) ? authorization.replace('Bearer', '') : null;
      },
      verifyToken: function(authorization, req, res) {
        const isAdmin = true
        const token = module.exports.parseAuthorization(authorization)
        if(token != null){
          try{
          jwtToken = jwt.verify(isAdmin, token, 'RANDOM_TOKEN_SECRET')
          if(jwtToken != null){
            return jwtToken.isAdmin
          }
          } catch {}
        }
        return isAdmin
      }
};