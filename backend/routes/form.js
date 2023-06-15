const express = require('express');

const router = express.Router()

const formCtrl = require('../controllers/formCtrl')

router.post('/send', formCtrl.sendMail)


module.exports = router;