const connection = require('./db.js')

module.exports = {

  getUsers(callback) {
    function queryCallback (err, result, fields){
      if (err) throw err;
      callback(result);
    }
    return connection.query('SELECT * from users', queryCallback)
  }

  // addUsers(callback) {
  //   function queryCallback (err, result, fields){
  //     if (err) throw err;
  //     callback(result);
  //   }
  //   return connection.query('SELECT * from users', queryCallback)
  // }
  //
  // updateUsers(callback) {
  //   function queryCallback (err, result, fields){
  //     if (err) throw err;
  //     callback(result);
  //   }
  //   return connection.query('SELECT * from users', queryCallback)
  // }
  //
  // deleteUsers(callback) {
  //   function queryCallback (err, result, fields){
  //     if (err) throw err;
  //     callback(result);
  //   }
  //   return connection.query('SELECT * from users', queryCallback)
  // }

  // createUser(name_user, email_user, password_user, picture_user) {
  //   return connection.query(`INSERT INTO users(id, name_user, email_user, password_user, picture_user) VALUES (DEFAULT, '${name_user}', '${email_user}', '${password_user}', '${picture_user}');`)
  // },

  // getUserById(id) {
  //   return connection.query(`SELECT * from users WHERE id= '${id}';`)
  // }


  // updateUser(id, prenom, nom) {
  //   return connection.query(`UPDATE users SET prenom = '${prenom}', nom = '${nom}' WHERE id= ${id};`)
  // },
  //
  // deleteUser(id) {
  //   return connection.query(`DELETE FROM users WHERE id= ${id};`)
  // },
  // getTodosByUserId(id) {
  //   return connection.query(`SELECT todos.name from todos INNER JOIN users_todos ON user_id=${id} AND todos.id = todo_id;`)
  // }
}
