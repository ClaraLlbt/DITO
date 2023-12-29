const { Sequelize } = require('sequelize');
const models = require('../models/')

const auth = require('../middlewares/auth');

// Contrôleur des articles
exports.create = async (req, res, next) => {
 
  //Permet de vérifier le token
  headerAuth = req.headers['authorization'].split('Bearer ')[1];
  const isAdmin = auth.verifyToken(headerAuth)
  console.log({"verify" : isAdmin});

  attachments = req.file ?
  {
   ...req.body,
    path : `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  } : { ...req.body };

  articleID =  req.body.articleId

  models.Attachment.create({
    path: attachments.path,
    articleId: attachments.articleId
  })
  .then(function(response){
    return res.status(200).json(response)
   })
  .catch(function(error){
      return res.status(500).json({error: error})
  })
};

exports.delete = async (req, res, next) => {
 
  //Permet de vérifier le token
  headerAuth = req.headers['authorization'].split('Bearer ')[1];
  const isAdmin = auth.verifyToken(headerAuth)
  console.log({"verify" : isAdmin});
  const attachmentId = req.params.id
  models.Attachment.findOne({
    where: {
      id : attachmentId
    }
  })
  .then((attachmentFound)=>{
    if(attachmentFound){
      attachmentFound.destroy()
      .then((response) => {
        return res.status(200).json({message: "images supprimées"})
      })
      .catch((error) => {
        return res.status(500).json({error: 'Impossible de supprimer les images selectionnées'})
      })
    }
  })
  .catch((error)=>{
    console.log(error);
  })
};
