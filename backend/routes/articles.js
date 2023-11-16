const express = require('express');
const router = express.Router();

const articlesCtrl = require('../controllers/articles');
const usersCtrl = require('../controllers/users')

//Permet d'importer le middleware de gestion de fichiers multimédias
const multer = require('../middlewares/multer-config');


// Routes Articles
router.post('/articles/', multer, articlesCtrl.postArticle);
router.get('/articles/', articlesCtrl.getAllArticles);
router.delete('/articles', articlesCtrl.dltAllArticles)

router.get('/articles/:id', articlesCtrl.mdfArticle)
router.put('/articles/:id', multer, articlesCtrl.mdfArticle)
router.delete('/articles/:id', articlesCtrl.dltArticle)

// Routes UserAdmin
router.post('/users', usersCtrl.isAdmin)

module.exports = router;
