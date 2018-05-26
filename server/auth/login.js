const { compare } = require('./pwd.js');
const user = require('../Models/userModel');



const checkCredentials = (username, password) => {
  return user
    .getUserByUsername(username)
    .then(user => user || Promise.reject({ error: "bad username" }))
    .then(user => {
      console.log(user);
      return user
    })
    .then(user =>
      compare(password, user[0].password_user).then(
        isMatch => (isMatch ? user[0] : Promise.reject({ error: "bad password" }))
      )

    )
    .catch(err => Promise.reject(err));
};
// pour les tests
exports.checkCredentials = checkCredentials;

/**
 * Middleware pour express (cf. http://expressjs.com/fr/guide/using-middleware.html)
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.checkCredentialsMiddleware = (req, res, next) => {

  const { username, password } = req.body;
  checkCredentials(username, password)
    .then(user => {
      req.user = user;
      next();
    })
    .catch(err => res.status(401).json(err));
};
