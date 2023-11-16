const models = require('../models/')

// Contrôleur pour récupérer tous les articles
exports.isAdmin = async (req, res, next) => {
   username = req.body.username
   password = req.body.password
   console.log(username);

    // Permet de vérifier que tous les champs sont complétés
    if(username == "" || password == ""){
        return res.status(400).json({"error": "Tous les champs doivent être remplis"})
    }
    // Crypte le mot de passe et Vérifie s'il correspond à celui de la base de données
    models.User.findOne({
    })
    .then(function(user){
        if(user.username === req.body.username && user.password === req.body.password && user.isAdmin === true) {
           res.json({user : user})
         } else {
             res.status(404).json({"error" : "Vous n'êtes pas autorisé à vous connecter. Merci de contacer l'administrateur"});
         } 
     })
    .catch(function(err){
        console.log(err)
        res.status(500).json({"error": "invalid user"})
    })
};

