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
})

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
    res.json({
        token: "JWT " + generateToken(req.user),
        user: {
          id: req.user.id_user,
          username: req.user.username,
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


// .post("/login", checkCredentialsMiddleware, (req, res) => {
//     // ici on appelle checkCredentials
//     // checkCredentials(req.body.email, req.body.password)
//     // .then( () => res.send('LOGIN REUSSI'))
//     // .catch( err => res.send(err))
//
//     // Grâce au middleware checkCredentialsMiddleware, on récupere le user
//     res
//       .status(200)
//       .json({
//         token: "JWT " + generateToken(req.user),
//         user: {
//           id: req.user.id,
//           username: req.user.username,
//         }
//       });
// });

// app.get('/email/:email_user', function(req, res){
//   const {email_user} = req.params;
//   function callback (result) {
//     res.json(result);
//   }
//   model.getUsersByEmail({email_user}, callback);
// });
//
// app.get('/email', function(req, res){
//   function callback (result) {
//     res.json(result);
//   }
//   model.getEmail( callback);
// });


//
// app.get("/user",function(req,res){
// connection.query('SELECT * from user LIMIT 2', function(err, rows, fields) {
// connection.end();
//   if (!err)
//     console.log('The solution is: ', rows);
//   else
//     console.log('Error while performing Query.');
//   });
// });

app.get('/', function (req, res) {
  res.send('Hello World!');
});
// app.get('/user', (req, res) => {
//   connection.connect(function(err) {
//     connection.query("SELECT * FROM users", function (err, result, fields) {
//       if (err) throw err;
//       console.log(result);
//     });
//   });
// })

// app.get('/', (req, res) => {
//   res.send('Hello to Me and to the reload and nodemon')
// })
module.exports = app;
