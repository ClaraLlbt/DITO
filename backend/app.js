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

app.get('/', (req, res) => {
    if(res){
      res.send('Connexion au server')
      console.log('Connexion établie')
    } else if (error) {
      res.send({error})
    }
})

app.post('/send', formRoutes);

module.exports = app;