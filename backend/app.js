const express = require('express');
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer');

const formRoutes = require('./routes/form')
const app = express();


//Middleware CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


app.use(express.urlencoded({ extended: true })); // permet de parser les données envoyées en POST
app.use(bodyParser.json());

app.post('/send', formRoutes, (req, res) => {
      firstname = req.body.firstname,
      lastname = req.body.lastnam,
      email = req.body.email,
      phone = req.body.phone,
      object = req.body.object,
      message = req.body.message
    
    if (error) {
          console.log(error);
          res.send('Une erreur est survenue lors de l\'envoi de l\'e-mail');
        } else {
          console.log('E-mail envoyé : ' + response);
          response.send('Votre message a été envoyé avec succès');
        }
    const transporter = nodemailer.createTransport({
      host: '5 mx2.mail.ovh.net',
      port: 587,
      secure: true, // true pour les connexions SSL
      auth: {
        user: 'contact@dito-pro.fr',
        pass: 'YSVgB3Hn_AcLX,8'
      }
    });
  
    const mailOptions = {
      from: 'user@example.com',
      to: 'recipient@example.com',
      subject: 'Nouveau message de ' + firstname + ' ' + lastname,
      text: message,
      replyTo: email
    };
  
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.send('Une erreur est survenue lors de l\'envoi de l\'e-mail');
      } else {
        console.log('E-mail envoyé : ' + info.response);
        res.send('Votre message a été envoyé avec succès');
      }
    });
  });

module.exports = app;