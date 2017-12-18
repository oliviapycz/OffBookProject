const express = require('express')
const app = express.Router()
const connection = require('../Models/db')
const model = require('../Models/bookModel')

app.get('/book', function(req, res){
  function callback (result) {
    res.json(result);
  }
  model.getBooks(callback);
});

app.post('/book', function(req, res){
  const {name_book, author_book, year_book, description_book, picture_path_book} = req.body;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.addBooks({name_book, author_book, year_book, description_book, picture_path_book}, callback);
});

app.put('/book/:id_book', function(req, res){
  const {id_book} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book} = req.body;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.addBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book}, callback);
});
// .post('/', (req, res) => {
//     const { lastname, firstname } = req.body;
//     model.createUser({ firstname, lastname })
//       .then(result => res.send(result))
//       .catch(err => console.log(err))
// })
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
