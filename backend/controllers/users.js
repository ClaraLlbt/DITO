const models = require('../models/')

// Contrôleur pour récupérer tous les articles
exports.isAdmin = async (req, res, next) => {
   username = req.body.username
   password = req.body.password
   console.log(req.body);

    // Permet de vérifier que tous les champs sont complétés
    if(username == "" || password == ""){
        return res.status(400).json({"error": "Tous les champs doivent être remplis"})
    }
    // Crypte le mot de passe et Vérifie s'il correspond à celui de la base de données
    models.User.findOne({
        where: {
            username : req.body.username
        }
    })
    .then(function(user){
        console.log(user);
        if(user.username == username && user.password == password || user.username == username && user.password == password && user.isAdmin == true ){
            return res.status(200).json({message: "Bienvenue !"})
        } 
        else{
            res.status(500).json({"error": "invalid user"})

        }
     })
    .catch(function(err){
        console.log(err)
        res.status(500).json({"error": "invalid user"})
    })
};

