const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controllers/articles');
const usersCtrl = require('../controllers/users')
const attachmentsCtrl = require('../controllers/attachments');

//Permet d'importer le middleware de gestion de fichiers multimédias
const multer = require('../middlewares/multer-config');


// Routes Articles
router.post('/articles/', articlesCtrl.postArticle);
router.get('/articles/', articlesCtrl.getAllArticles);
router.delete('/articles', articlesCtrl.dltAllArticles)

router.get('/articles/:id', articlesCtrl.getArticle)
router.put('/articles/:id', articlesCtrl.mdfArticle)
router.delete('/articles/:id', articlesCtrl.dltArticle)

router.post('/attachments/', multer, attachmentsCtrl.create)
router.delete('/attachments/:id', attachmentsCtrl.delete)


// Routes UserAdmin
router.post('/users', usersCtrl.createUser)
router.post('/users/client', usersCtrl.clientID)
router.post('/users/isAdmin', usersCtrl.isAdmin)

module.exports = router;
