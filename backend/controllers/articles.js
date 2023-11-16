const { Sequelize } = require('sequelize');
const models = require('../models/')

// Testez la connexion à la base de données
const sequelize = new Sequelize('ditoDB', 'root', 'KanagawaLu', {
    host: 'localhost',
    dialect: 'mysql',
  });  
  sequelize.authenticate()
    .then(() => {
      console.log('Connexion à la base de données établie avec succès.');
    })
    .catch(err => {
      console.error('Impossible de se connecter à la base de données :', err);
    });   


// Contrôleur des articles
exports.postArticle = async (req, res, next) => {
  // attachment = req.body.attachment
  title = req.body.title
  content = req.body.content
  attachment = req.body.image
  if(title == "" || content == "") {
    return res.status(400).json({error: "Tous les champs doivent être remplis"})
  }
  // else if(!contentRegex.test(content)){
  //     return res.status(400).json({"error": "Votre message doit contenir entre 3 et 250 caractères."})
  // }

  models.Article.create({
    attachment: req.file ? `${req.protocol}://${req.get('host')}/images/${req.file.filename}`: req.body.image,
    title: title,
    content: content
  })
  .then(function(response){
    console.log(response);
    return res.status(200).json("Votre article a bien été créé")
   })
  .catch(function(error){
      return res.status(500).json({error: "Impossible de créer votre article"})
  })
};

exports.getAllArticles = async (req, res, next) => {
    order = req.query.order // permet de sortir la liste des messages via un order particulier

    models.Article.findAll({
      order: [(order != null) ? order.split(':') : ['createdAt', 'DESC']],
    })
    .then(function(articles){
        if(articles) {
           res.status(200).json(articles)
         } else {
             res.status(404).json({"error" : "no articles found"});
         } 
     })
    .catch(function(err){
        console.log(err)
        res.status(500).json({"error": "invalid fields"})
    })
};

exports.dltAllArticles = async (req, res, next) => {
  models.Article.findAll()
  .then(function(articles){
      console.log(articles);
      models.Article.destroy({
        where: {}
      })
      return res.status(200).json({message: 'destroy'})
   })
  .catch(function(err){
      console.log(err)
      res.status(500).json({"error": "invalid fields"})
  })
};

exports.mdfArticle = async (req, res, next) => {
  const articleId = req.params.id
  const title = req.body.title
  const content = req.body.content
  const newAttachment = req.body.attachment

  // Find an article ID and modify it
  models.Article.findOne({
    attributes: ['id', 'title', 'content', 'attachment'],
    where : { id: articleId}
  })
  .then((articleById) => {
    if(articleById){
      articleById.update({
        title: (title ? title : articleById.title),
        content: (content ? content : articleById.content),
        attachment: (newAttachment ? newAttachment : articleById.attachment)
      })
      return res.status(200).json({
        status: "Bien joué ! Votré article a bien été modifié !",
        data: articleById
      })
    } else {
        return res.status(500).json({"error" : "La modification n'a pas été prise en compte"})
    }
    
  })
  .catch(function(error){
    return res.status(404).json({error : "L'article n'a pas été trouvé"})
  })
};

exports.dltArticle = async (req, res, next) => {
  const articleId = req.params.id
  // Permet de trouver un message précis afin de pouvoir le modifier
 // Permet de trouver un message précis afin de pouvoir le modifier
  models.Article.findOne({
    attributes: ['id', 'title', 'content', 'attachment'],
    where : { id: articleId}
  })
  .then((articleToDlt) => {
    console.log(articleToDlt);
    if(articleToDlt){
      articleToDlt.destroy({
        where: {id: articleId}
      })
      .then((articleDeleted) => {
        return res.status(200).json({"message" : "Message deleted with success", articleDeleted})
      }).catch((err) => {
          return res.status(400).json({"error" : "Message not deleted"})
      })
    }

  })
  .catch(function(error){
    console.log(error);
    return res.status(500).json({"error" : "Impossible de vérifier"})
  })
};

