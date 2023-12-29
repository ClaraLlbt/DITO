const models = require('../models/')
//imports
const bcrypt = require('bcrypt');
//importe le middleware d'authentification
const auth = require('../middlewares/auth');

//Permet de créer un nouvel utilisateur 
exports.createUser = (req, res, next) => {
    username = req.body.username
    password = req.body.email


    //Permet de vérifier que tous les champs sont complétés
    if(username == "" || password == "") {
        return res.status(400).json({ "error" : "Tous les champs doivent être remplis !"})
    } 
    //Permet de vérifier que l'utilisateur existe dans la base de données
    models.User.findOne({
        where: { 
            username : username
        }
    })
    .then(function(user){
        //Si l'utilisateur n'est pas trouvé dans la BD

        if(!user){
                //un nouvel utilisateur est créé et son mot de passe est salé avant d'être stocké
                bcrypt.genSalt(5, function(err, salt){
                    bcrypt.hash(req.body.password, salt, function(error, bcryptedPassword){
                        const newUser = models.User.create({
                            username : username,
                            password : bcryptedPassword,
                            isAdmin: 1
                        })
                        .then(function(newUser){
                            return res.status(201).json({
                                message: "L'utilisateur a été créé!"
                            })
                        })
                        .catch(function(error){
                            return res.status(500).json({"error": "L'utilisateur ne peut être ajouté!"})
                        })
                    })
                })
            } else {
                return res.status(409).json({"error": "l'utilisateur existe déjà"})
            }
        
    })
    .catch(function(erreur){
        return res.status(500).json({ "error" : "impossible de vérifier l'utilisateur"})
    })
},

exports.clientID = (req,res, next) => {
    const username = req.body.username
    const password = req.body.password
    // Permet de vérifier que tous les champs sont complétés
    if(username === "" && password || username && password === "" || username === "" && password === ""){
        return res.status(400).json("Tous les champs doivent être remplis")
    }

    models.User.findOne({
        where: {
            username : username
        }
    })
    .then((client) =>{
        bcrypt.compare(password, client.password, function(err, user){
        
            //Si le mdp est valide, l'utilisateur accède à ses données et obtient un token
            // Son email doit être décrypter pour être affiché sur le frontend
            return res.status(200).json({
                message: "Bienvenue sur le calendrier DITO",
                 //importe le middleware d'authentification
            })
        })
    
    })
    .catch((err)=>{
        return res.status(500).json("Vous n'êtes pas autorisé à vous connecter")
    })

}
// Contrôleur pour récupérer tous les articles
exports.isAdmin = async (req, res, next) => {
   username = req.body.username
   password = req.body.password

    // Permet de vérifier que tous les champs sont complétés
    if(username === "" && password || username && password === "" || username === "" && password === ""){
        return res.status(400).json("Tous les champs doivent être remplis")
    }

    // Crypte le mot de passe et Vérifie s'il correspond à celui de la base de données
    models.User.findOne({
        where: {
            username : username,
            isAdmin : true,
        }
    })
    .then((user)=> {
        bcrypt.compare(password, user.password, function(err, user){
            //Si le mdp est valide, l'utilisateur accède à ses données et obtient un token
            // Son email doit être décrypter pour être affiché sur le frontend
            if(user){
                return res.status(200).json({
                    message: "Bienvenue sur votre espace CRUD",
                    isAdmin: user.isAdmin,
                    token : auth.generateRandomToken(user) //importe le middleware d'authentification
                }) } else {
                    return res.status(404).json("Votre identifiant et/ou votre mot de passe sont incorrectes")
                }
           })
     })
    .catch(function(err){
        res.status(500).json("Vous n'êtes pas autorisé à vous connecter")
    })
};

