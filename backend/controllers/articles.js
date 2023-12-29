const { Sequelize } = require('sequelize');
const models = require('../models/')

const auth = require('../middlewares/auth');
const { attachments } = require('./attachments');
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
 
  //Permet de vérifier le token
  headerAuth = req.headers['authorization'].split('Bearer ')[1];
  const isAdmin = auth.verifyToken(headerAuth)
  console.log({"verify" : isAdmin});

  title = req.body.title
  content = req.body.content
  console.log(req.body.content);
  if(title == "" || content == "") {
    return res.status(400).json({error: "Tous les champs doivent être remplis"})
  }
  // else if(!contentRegex.test(content)){
  //     return res.status(400).json({"error": "Votre message doit contenir entre 3 et 250 caractères."})
  // }

  models.Article.create({
    title: title,
    content: content
  })
  .then(function(response){
    console.log(response);
    return res.status(200).json({
      response: response,
      message: "Votre article a bien été créé"
    })
   })
  .catch(function(error){
      return res.status(500).json({error: error})
  })
};

exports.getAllArticles = async (req, res, next) => {
  const order = req.query.order;

  try {
      const articles = await models.Article.findAll({
          order: [(order != null) ? order.split(':') : ['createdAt', 'DESC']],
      });

      if (articles && articles.length > 0) {
          const articleIds = articles.map(article => article.id);

          // Récupérer les pièces jointes pour chaque article
          const attachmentPromises = articleIds.map(articleId => {
              return models.Attachment.findAll({
                  where: { articleId: articleId }
              });
          });

          const attachmentsForArticles = await Promise.all(attachmentPromises);

          // Associer les pièces jointes à chaque article
          const articlesWithAttachments = articles.map((article, index) => {
              return {
                  ...article.toJSON(),
                  attachments: attachmentsForArticles[index]
              };
          });

          const lastID = Math.max(...articleIds);
          const lastArticle = articlesWithAttachments.find(article => article.id === lastID);

          // Filtrer les articles pour exclure l'article le plus récent
          const hiddenArticle = articlesWithAttachments.filter(article => article.id !== lastID);

          const allAttachments = await models.Attachment.findAll();

          return res.status(200).json({
              articles: articlesWithAttachments,
              filterList: hiddenArticle,
              lastArticle: lastArticle
          });
      } else {
          return res.status(404).json({ "error": "no articles found" });
      }
  } catch (err) {
      console.error(err);
      return res.status(500).json({ "error": "internal server error" });
  }
};


exports.dltAllArticles = async (req, res, next) => {
  try {
    const articlesToDlt = models.Article.findAll();

    for (const article of articlesToDlt) {
      // Supprimer les pièces jointes associées à l'article
      models.Attachment.destroy({
        where: { articleId: article.id }
      });

      // Supprimer l'article lui-même
      models.Article.destroy({
        where: { id: article.id }
      });
    }

    return res.status(200).json({ message: "Tous les articles ont été supprimés avec succès !" });
  } catch (error) {
    
    return res.status(500).json({ error: "Une erreur s'est produite lors de la suppression des articles." });
  }
};


exports.getArticle = async (req, res, next) => {
  //Permet de vérifier le token

  const articleId = req.params.id
  // Find an article ID and modify it
  models.Article.findOne({
    attributes: ['id', 'title', 'content'],
    where : { id: articleId}
  })
  .then((articleById) => {
      models.Attachment.findAll({
        where: { 
          articleId : articleId
        }
      })
      .then((attachments) =>{
        return res.status(200).json({
          data: articleById,
          attachments: attachments
        })
      })
      .catch((error) =>{
        return res.status(404).json({error : "Aucune image trouvé !"})
      })
  })
  .catch(function(error){
    return res.status(404).json({error : "L'article n'a pas été trouvé"})
  })
};

exports.mdfArticle = async (req, res, next) => {
  //Permet de vérifier le token
  headerAuth = req.headers['authorization'].split('Bearer ')[1];
  const isAdmin = auth.verifyToken(headerAuth)
  console.log({"verify" : isAdmin});

  const articleId = req.params.id
  console.log(articleId);
  const title = req.body.title
  const content = req.body.content
  // Find an article ID and modify it
  models.Article.findOne({
    where : { id: articleId}
  })
  .then((articleById) => {
    if(articleById){
      articleById.update({
        title: (title ? title : articleById.title),
        content: (content ? content : articleById.content),
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
  //Permet de vérifier le token
  headerAuth = req.headers['authorization'].split('Bearer ')[1];
  const isAdmin = auth.verifyToken(headerAuth)
  console.log({"verify" : isAdmin});

  const articleId = req.params.id
  console.log({"id" : articleId});
  // Permet de trouver un message précis afin de pouvoir le modifier
 // Permet de trouver un message précis afin de pouvoir le modifier
  models.Article.findOne({
    where : { id: articleId}
  })
  .then((articleToDlt) => {
    models.Attachment.destroy({
      where: { articleId : articleToDlt.id}
    })
    .then((attachmentsFound) => {
      if(attachmentsFound || !attachmentsFound){
        models.Article.destroy({
          where: { id : articleId}
        })
        .then((response)=>{
          return res.status(200).json({message: "Votre article a bien été supprimé !"})
        })
        .catch((error) =>{
          return res.status(400).json({error: "Impossible de supprimé l'article"})
        })
      } 
    })  
  })
  .catch(function(error){
    return res.status(500).json({error : "Impossible de vérifier l'article"})
  })
};

