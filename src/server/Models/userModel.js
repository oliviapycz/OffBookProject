const db= require('./db.js')
const { encode } = require('../auth/pwd.js')



module.exports = {

  getUsers() {
    return db.connectQuery('SELECT * from users')
  },

  getUserById(id_user) {
    return db.connectQuery(`SELECT * from users WHERE id_user = '${id_user}'`)
  },

  getUsernames() {
    return db.connectQuery(`SELECT username from users`)
  },

  getUsernameById(id_user) {
    return db.connectQuery(`SELECT username from users WHERE id_user = '${id_user}'`)
  },

  getUserByUsername(username) {
    return db.connectQuery(`SELECT * from users WHERE username = '${username}'`)
  },

  getEmails() {
    return db.connectQuery(`SELECT email_user from users`)
  },

  getUserByEmail(email_user) {
    return db.connectQuery(`SELECT * from users WHERE email_user = '${email_user}'`)
  },

  addUser({username, email_user, password_user, picture_path_user}) {
      return encode(password_user).then(hashPwd => {
        return db.connectQuery(`INSERT INTO
        users(
          username,
          email_user,
          password_user,
          picture_path_user
      ) VALUES(
          '${username}',
          '${email_user}',
          '${hashPwd}',
          '${picture_path_user}'
      )`)
    })
  },

}
