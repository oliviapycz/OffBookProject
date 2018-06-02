const express = require('express')
const app = express.Router()
const db = require('../Models/db')
const model = require('../Models/bookModel')
const { restructureDataListWithBooks } = require('../utils/restructureDataListWithBooks')

app.get('/book', (req, res) => {
  model.getBooks()
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/wishbook', (req, res) => {
  model.getWishBooks()
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
});

app.get('/lists', (req, res) => {
  model.getAllLists()
    .then(result => {
      res.json(result)
    })
    .catch(err => res.json(err))
});

app.get('/lists/:id_list', (req, res) => {
  const {id_list} = req.params;
  model.getListByListId(id_list)
    .then(result => {
      console.log('result', result.rows);
      restructureDataListWithBooks(result.rows)
      res.json(lists)
    })
    .catch(err => res.json(err))
});

app.get('/book/:id_book', (req, res) => {
  const {id_book} = req.params;
  model.getBooksById(id_book)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/wishbook/:id_book', (req, res) => {
  const {id_book} = req.params;
  model.getWishBooksById(id_book)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.post('/:id_user/book', (req, res) =>{
  const {id_user} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book,user_id} = req.body;
  model.addBooks({name_book, author_book, year_book, description_book, picture_path_book,user_id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.post('/:id_user/wishbook', (req, res) => {
  const {id_user} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book,user_id} = req.body;
  model.addWishBooks({name_book, author_book, year_book, description_book, picture_path_book,user_id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.post('/:id_user/lists', (req, res) => {
  const {id_user} = req.params;
  const {name_list, description_list,  user_id, username} = req.body;
  model.addList({name_list, description_list, user_id, username})
    .then(result => res.json(result.rows))
    .catch(err => res.json(err))
});

app.post('/:id_user/list-books', (req, res) => {
  const {id_user} = req.params;
  const {list_id, book_id} = req.body;
  model.associateBooksToList({list_id, book_id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.put('/book/:id_book', (req, res) => {
  const {id_book} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book} = req.body;
  model.updateBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.put('/wishbook/:id_book', (req, res) => {
  const {id_book} = req.params;
  const {name_book, author_book, year_book, description_book, picture_path_book} = req.body;
  model.updateWishBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book})
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.get('/:id_user/book', (req, res) => {
  const {id_user} = req.params;
  model.getBooksByUserId(id_user)
  .then(result => res.json(result))
  .catch(err => res.json(err))
});

app.get('/:id_user/lists', (req, res) => {
  const {id_user} = req.params;
  model.getListsByUserId(id_user)
    .then(result => {
         restructureDataListWithBooks(result.rows)
      res.json(lists)
    })
    .catch(err => res.json(err))
});

app.get('/:id_user/wishbook', (req, res) => {
  const {id_user} = req.params;
  model.getWishBooksByUserId(id_user)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

// app.get('/:id_user/book/byAuthor', function(req, res){
//   const {id_user} = req.params;
//   function callback (result) {
//     res.json(result);
//   }
//   model.getBooksByUserIdOrderByAuthor({id_user}, callback);
// });
//
// app.get('/:id_user/book/byYear', function(req, res){
//   const {id_user} = req.params;
//   function callback (result) {
//     res.json(result);
//   }
//   model.getBooksByUserIdOrderByYear({id_user}, callback);
// });

app.delete('/book/:id_book', (req, res) => {
  const {id_book} = req.params;
  model.deleteBooks(id_book)
    .then(result => res.json(result))
    .catch(err => res.json(err))
});

app.delete('/wishbook/:id_book', (req, res) => {
  const {id_book} = req.params;
  model.deleteWishBooks(id_book)
    .then(result => res.json(result))
    .catch(err => res.json(err))
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
