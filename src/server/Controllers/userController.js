const express = require('express')
const app = express.Router()
const connection = require('../Models/db')
const model = require('../Models/userModel')


// app.put('/user/:id', (req, res) => {
//     const { id } = req.params;
//     const { name_user, email_user } = req.body;
//     model.updateUser(id, name_user, email_user).then((data) => {
//         res.json(data)
//     }).catch(err => {
//         res.send(err);
//     });
// });

// app.get('/user', (req, res) => {
//     const { id } = req.params;
//     model.getUserById(id).then((data) => {
//         res.json(data.rows)
//     }).catch(err => {
//         res.send(err);
//     });
// });

//   app.get('/user', (req, res) => {
//     model.getUsers()
//       .then(result => res.json(result))
//       .catch(err => res.json(err))
// });

app.get('/user', function(req, res){

  function callback (result) {
    res.json(result);
  }
  model.getUsers(callback);
  // connection.query('SELECT * FROM users', function(err, rows){
  //   res.json(rows);
  // });
});

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
