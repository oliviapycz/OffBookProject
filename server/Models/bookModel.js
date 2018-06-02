const db = require('./db.js')

module.exports = {

  getBooks() {
    return db.query('SELECT * from books')
  },

  getWishBooks() {
    return db.query('SELECT * from wishbooks')
  },

  getBooksById(id_book) {
    return db.query(`SELECT * from books WHERE id_book = '${id_book}'`)
  },

  getWishBooksById(id_book) {
    return db.query(`SELECT * from wishbooks WHERE id_book = '${id_book}'`)
  },

  addBooks({name_book, author_book, year_book, description_book, picture_path_book, user_id}) {
    return db.query(`INSERT INTO
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
    )`)
  },

  addWishBooks({name_book, author_book, year_book, description_book, picture_path_book, user_id}) {
    return db.query(`INSERT INTO
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
    )`)
  },

  addList({name_list, description_list, user_id, username}) {
    return db.query(`INSERT INTO
      lists(
        name_list,
        description_list,
        user_id,
        username
    ) VALUES(
        '${name_list}',
        '${description_list}',
        '${user_id}',
        '${username}'
    ) RETURNING id_list`)
  },

  associateBooksToList({list_id, book_id}) {
    return db.query(`INSERT INTO
      list_books(
        list_id,
        book_id
      ) VALUES(
        '${list_id}',
        '${book_id}'
      )`)
  },

  getListsByUserId(id_user) {
    return db.query(`SELECT *
      FROM lists
      INNER JOIN list_books
      ON list_books.list_id = lists.id_list
      INNER JOIN books
      ON books.id_book = list_books.book_id
      WHERE lists.user_id = '${id_user}'`)
  },

  getListByListId(id_list) {
    return db.query(`SELECT *
      FROM lists
      INNER JOIN list_books
      ON list_books.list_id = lists.id_list
      INNER JOIN books
      ON books.id_book = list_books.book_id
      WHERE lists.id_list = '${id_list}'`)
  },

  getAllLists() {
    return db.query(`SELECT * FROM lists`)
  },

  updateBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book}) {
    return db.query(`UPDATE
      books SET
        name_book='${name_book}',
        author_book='${author_book}',
        year_book='${year_book}',
        description_book='${description_book}',
        picture_path_book='${picture_path_book}'
      WHERE id_book=${id_book}`)
  },

  updateWishBooks({id_book, name_book, author_book, year_book, description_book, picture_path_book}) {
    return db.query(`UPDATE
      wishbooks SET
        name_book='${name_book}',
        author_book='${author_book}',
        year_book='${year_book}',
        description_book='${description_book}',
        picture_path_book='${picture_path_book}'
      WHERE id_book=${id_book}`)
  },

  deleteBooks(id_book) {
    return db.query(`DELETE
      FROM books
      WHERE books.id_book = '${id_book}'`)
  },

  deleteWishBooks(id_book) {
    return db.query(`DELETE
      FROM wishbooks
      WHERE wishbooks.id_book = '${id_book}'`)
  },

  getBooksByUserId(id_user) {
    return db.query(`SELECT * FROM books WHERE user_id = '${id_user}'`)
  },

  getWishBooksByUserId(id_user) {
    return db.query(`SELECT *
      FROM wishbooks
      WHERE wishbooks.user_id = '${id_user}'`)
  },

  getBooksByUserIdOrderByAuthor(id_user) {
    return db.query(`SELECT *
      FROM books
      WHERE books.user_id = '${id_user}'
      ORDER BY author_book`)
  },

  getBooksByUserIdOrderByYear(id_user) {
    return db.query(`SELECT *
      FROM books
      WHERE books.user_id = '${id_user}'
      ORDER BY year_book`)
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
