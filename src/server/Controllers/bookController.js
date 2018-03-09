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

app.get('/wishbook', function(req, res){
  function callback (result) {
    res.json(result);
  }
  model.getWishBooks(callback);
});

app.get('/lists', function(req, res){
  function callback (result) {
    res.json(result);
  }
  model.getAllLists(callback);
});

app.get('/lists/:id_list', function(req, res){
  const {id_list} = req.params;
  function callback (result) {
    res.json(result);
  }
  model.getListByListId({id_list}, callback);
});

app.get('/book/:id_book', function(req, res){
  const {id_book} = req.params;
  function callback (result) {
    res.json(result);
  }
  model.getBooksById({id_book}, callback);
});

app.get('/wishbook/:id_book', function(req, res){
  const {id_book} = req.params;
  function callback (result) {
    res.json(result);
  }
  model.getWishBooksById({id_book}, callback);
});

app.post('/:id_user/book', function(req, res){
  const {id_user} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book,user_id} = req.body;
  // console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.addBooks({name_book, author_book, year_book, description_book, picture_path_book,user_id}, callback);
});

app.post('/:id_user/wishbook', function(req, res){
  const {id_user} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book,user_id} = req.body;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.addWishBooks({name_book, author_book, year_book, description_book, picture_path_book,user_id}, callback);
});

app.post('/:id_user/lists', function(req, res){
  const {id_user} = req.params;
  const {name_list, description_list, books_arr, user_id, username} = req.body;
  console.log('books_arr', books_arr);
  console.log('value' + JSON.stringify(req.body));
  function callback (result) {
    res.json(result);
  }
model.addLists({name_list, description_list, books_arr, user_id, username}, callback);
});

app.put('/book/:id_book', function(req, res){
  const {id_book} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book} = req.body;
  console.log('the PUT response' + JSON.stringify(req.body));
  function callback (result) {
    res.json(result);
  }
  model.updateBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book}, callback);
});

app.put('/wishbook/:id_book', function(req, res){
  const {id_book} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book} = req.body;
  console.log('the PUT response' + JSON.stringify(req.body));
  function callback (result) {
    res.json(result);
  }
  model.updateWishBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book}, callback);
});

app.get('/:id_user/book', function(req, res){
  const {id_user} = req.params;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.getBooksByUserId({id_user}, callback);
});

app.get('/:id_user/lists', function(req, res){
  const {id_user} = req.params;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.getListsByUserId({id_user}, callback);
});

app.get('/:id_user/wishbook', function(req, res){
  const {id_user} = req.params;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.getWishBooksByUserId({id_user}, callback);
});

app.get('/:id_user/book/byAuthor', function(req, res){
  const {id_user} = req.params;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.getBooksByUserIdOrderByAuthor({id_user}, callback);
});

app.get('/:id_user/book/byYear', function(req, res){
  const {id_user} = req.params;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.getBooksByUserIdOrderByYear({id_user}, callback);
});

app.delete('/book/:id_book', function(req, res){
  const {id_book} = req.params;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.deleteBooks({id_book}, callback);
});

app.delete('/wishbook/:id_book', function(req, res){
  const {id_book} = req.params;
  console.log('the response' + req.body);
  function callback (result) {
    res.json(result);
  }
  model.deleteWishBooks({id_book}, callback);
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
