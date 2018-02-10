const express = require('express')
const cors = require('cors')
const passport = require('passport');
const flash = require('connect-flash');

const pwd = require('./auth/pwd.js')
// cors : permets de gérer avec qui le serveur va accepter

const userController = require('./Controllers/userController');
const bookController = require('./Controllers/bookController')

const app = express()
// express est un router: un serveur web : gérer des routes

app.use(cors()); // enables ALL
app.use(express.json()) //ce middleware express parse le json envoyé en POST
// pour un formulaire classique le middleware est : express URLencoded
//middleware transformateur de JSON qui se trouverait dans le body

/////////////////////////////////////////////////////////////////////////////////////////////////////

// Davido's code
// middleware to escape simple quotes
// I use simple quotes in SQL queries (cf. model)
app.use((req, res, next) => {
  req.body = Object.entries(req.body).reduce(( acc, [key, value] ) => {
    acc[key] = (typeof value === 'string') ? value.replace(/\'/g, '\'\'') : value
    return acc
  }, {})
  next();
})

// Routes et Controller :
app.use('', userController);
app.use('', bookController);

// middleware pour une route à laquelle j'attache un controller

/////////////////////////////////////////////////////////////////////////////////////////////////////

// création du serveur et connexion au port 3000

app.listen(3000, err => {
  // : app.listen(3000, function(err) {
  if(err) {
    console.log('No connexion');
  }
  console.log('Connexion good on port 3000!');
})

// pwd.encodePassword('password')
//   .then( hash => pwd.comparePassword('otherPassword', hash))
//   .then( isMatch => console.log(isMatch))
//   .catch(err => console.log('error', err))


// test encode
pwd
  .encode("veggie")
  .then(hash => console.log(hash))
  .catch(err => err)
// test compare
pwd
  .encode('veggie')
  .then( hash => pwd.compare('bacon', hash))
  .then( isMatch => console.log(isMatch))
  .catch(err => console.log('error : ', err))


  // .then(hash => pwd.comparePassword("bacon", hash))
// .then(trueOrFalse => console.log("Coucou je suis : ", trueOrFalse));
