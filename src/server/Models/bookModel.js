const connection = require('./db.js')

module.exports = {

  getBooks(callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query('SELECT * from books', queryCallback)
  },

  getWishBooks(callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query('SELECT * from wishbooks', queryCallback)
  },

  getBooksById({id_book}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT * from books WHERE id_book = '${id_book}'`, queryCallback)
  },

  getWishBooksById({id_book}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT * from wishbooks WHERE id_book = '${id_book}'`, queryCallback)
  },

  addBooks({name_book, author_book, year_book, description_book, picture_path_book, user_id}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`INSERT INTO
      books(
        name_book,
        author_book,
        year_book,
        description_book,
        picture_path_book,
        user_id
    ) VALUES(
        '${name_book}',
        '${author_book}',
        '${year_book}',
        '${description_book}',
        '${picture_path_book}',
        '${user_id}'
    )`, queryCallback)
  },

  addWishBooks({name_book, author_book, year_book, description_book, picture_path_book, user_id}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`INSERT INTO
      wishbooks(
        name_book,
        author_book,
        year_book,
        description_book,
        picture_path_book,
        user_id
    ) VALUES(
        '${name_book}',
        '${author_book}',
        '${year_book}',
        '${description_book}',
        '${picture_path_book}',
        '${user_id}'
    )`, queryCallback)
  },

  // addLists({name_list, description_list, books_arr, user_id}, callback) {
  //   function queryCallback (err, result, fields){
  //     if (err) throw err;
  //     callback(result);
  //   }
  //   return connection.query(`INSERT INTO
  //     lists(
  //       name_list,
  //       description_list,
  //       books_arr,
  //       user_id
  //   ) VALUES(
  //       '${name_list}',
  //       '${description_list}',
  //       JSON_ARRAY('${books_arr}'),
  //       '${user_id}'
  //   )`, queryCallback)
  // },

  addLists({name_list, description_list, books_arr, user_id, username}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`INSERT INTO
      lists(
        name_list,
        description_list,
        books_arr,
        user_id,
        username
    ) VALUES(
        '${name_list}',
        '${description_list}',
        JSON_ARRAY('${books_arr}'),
        '${user_id}',
        '${username}'
    )`, queryCallback)
  },


  getListsByUserId({id_user}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT *
      FROM lists
      WHERE lists.user_id = '${id_user}'`, queryCallback)
  },

  getListByListId({id_list}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT *
      FROM lists
      WHERE lists.id_list = '${id_list}'`, queryCallback)
  },

  getAllLists(callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT * FROM lists`, queryCallback)
  },

  updateBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`UPDATE
      books SET
        name_book='${name_book}',
        author_book='${author_book}',
        year_book='${year_book}',
        description_book='${description_book}',
        picture_path_book='${picture_path_book}'
      WHERE id_book=${id_book}`, queryCallback)
  },

  updateWishBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`UPDATE
      wishbooks SET
        name_book='${name_book}',
        author_book='${author_book}',
        year_book='${year_book}',
        description_book='${description_book}',
        picture_path_book='${picture_path_book}'
      WHERE id_book=${id_book}`, queryCallback)
  },

  // getBooksByUserId({id_user}, callback) {
  //   function queryCallback (err, result, fields){
  //     if (err) throw err;
  //     callback(result);
  //   }
  //   return connection.query(`SELECT *
  //     FROM books
  //     INNER JOIN user_books, users
  //     WHERE users.id_user = '${id_user}'
  //     AND user_books.user_id = users.id_user
  //     AND books.id_book = user_books.book_id `, queryCallback)
  // },

  deleteBooks({id_book}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`DELETE
      FROM books
      WHERE books.id_book = '${id_book}'`, queryCallback)
  },

  deleteWishBooks({id_book}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`DELETE
      FROM wishbooks
      WHERE wishbooks.id_book = '${id_book}'`, queryCallback)
  },

  getBooksByUserId({id_user}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT *
      FROM books
      WHERE books.user_id = '${id_user}'`, queryCallback)
  },

  getWishBooksByUserId({id_user}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT *
      FROM wishbooks
      WHERE wishbooks.user_id = '${id_user}'`, queryCallback)
  },

  getBooksByUserIdOrderByAuthor({id_user}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT *
      FROM books
      WHERE books.user_id = '${id_user}'
      ORDER BY author_book`, queryCallback)
  },

  getBooksByUserIdOrderByYear({id_user}, callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query(`SELECT *
      FROM books
      WHERE books.user_id = '${id_user}'
      ORDER BY year_book`, queryCallback)
  },
  }


  // deleteBooks(callback) {
  //   function queryCallback (err, result, fields){
  //     if (err) throw err;
  //     callback(result);
  //   }
  //   connection.query(`DELETE`)
  // }


// SELECT * FROM `books` INNER JOIN user_books WHERE user_books.user_id = 1 AND books.id_book = user_books.book_id
