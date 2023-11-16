const express = require('express');
const cors = require('cors')
const path = require('path');
const bodyParser = require('body-parser')
const articlesRoute = require('./routes/articles')


const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/', (req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

const { sequelize, Article } = require('./models'); // Assurez-vous que le chemin est correct

sequelize
  .sync()
  .then(() => {
    console.log('Sequelize synchronized successfully');
    // Votre code d'application ici
  })
  .catch((error) => {
    console.error('Sequelize synchronization error:', error);
  });

//Transforme le corps de la requête en objet JS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/images', express.static(path.join(__dirname, 'images')));
// Endpoint pour traiter les téléchargements d'images


app.post('/articles/', articlesRoute);
app.get('/articles/', articlesRoute);
app.get('/articles/:id', articlesRoute)
app.put('/articles/:id', articlesRoute)
app.delete('/articles/:id', articlesRoute)
app.delete('/articles', articlesRoute)
app.post('/users', articlesRoute)

module.exports = app;