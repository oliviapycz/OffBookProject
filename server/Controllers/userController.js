const express = require('express')
const app = express.Router()
const db = require('../Models/db')
const model = require('../Models/userModel')
// const { checkCredentials } = require('../auth/login')
const { checkCredentialsMiddleware } = require("../auth/login")
const { registerCredentialsMiddleware } = require("../auth/register")
const { generateToken, checkTokenMiddleware } = require("../auth/jwt")


app.get('/users', (req, res) => {
  model.getUsers()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/user/:id_user', (req, res) => {
  const {id_user} = req.params;
  model.getUserById(id_user)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/users/usernames', (req, res) => {
  model.getUsernames()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/users/:id_user/username', (req, res) => {
  const {id_user} = req.params;
  model.getUsernameById(id_user)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/users/usernames/:username', (req, res) => {
  const {username} = req.params;
  model.getUserByUsername(username)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/users/emails', (req, res) => {
  model.getEmails()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/users/emails/:email_user', (req, res) => {
  const {email_user} = req.params;
  model.getUserByEmail(email_user)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.post('/users', registerCredentialsMiddleware, (req, res) => {
  // const {username, email_user, password_user, picture_path_user} = req.body;
  // model.addUser({username, email_user, password_user, picture_path_user})
  // .then(result => res.json(result))
  // .then(() => {
  console.log('[REQ USER]',req.user[0]);
    res.json({
        token: "JWT " + generateToken(req.user),
        testjwt: 'lolo',
        user: {
          id: 'coucou',
          id: req.user[0].id_user,
          username: req.user[0].username,
        }
      })
  // })
  // .catch(err => res.json(err))
});

app.post('/login', checkCredentialsMiddleware, (req, res) => {
    // ici on appelle checkCredentials
    // checkCredentials(req.body.email, req.body.password)
    // .then( () => res.send('LOGIN REUSSI'))
    // .catch( err => res.send(err))

    // Grâce au middleware checkCredentialsMiddleware, on récupere le user
    res.json({
        token: "JWT " + generateToken(req.user),
        user: {
          id: req.user.id_user,
          username: req.user.username,
        }
      });
});


module.exports = app;
