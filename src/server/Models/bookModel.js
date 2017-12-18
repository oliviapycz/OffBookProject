const connection = require('./db.js')

module.exports = {

  getBooks(callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query('SELECT * from books', queryCallback)
  },

  addBooks({name_book, author_book, year_book, description_book, picture_path_book}, callback) {
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
        picture_path_book
    ) VALUES(
        '${name_book}',
        '${author_book}',
        '${year_book}',
        '${description_book}',
        '${picture_path_book}'
    )`, queryCallback)
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
      WHERE id_book=${id_book})`, queryCallback)
  },
}
