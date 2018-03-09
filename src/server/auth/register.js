const user = require('../Models/userModel');



// const registerCredentials = (username, email_user, password_user) => {
//   console.log('registerCredentials before user', username, email_user, password_user);
//   return user
//     .getUserByUsername(username)
//     .then(user => !user.username || Promise.reject({ error: "username already taken" }))
//     .then(user => {
//       console.log(user.username);
//       return user
//     })
//     // .getUserByEmail(email)
//     .then(user => !user.email_user || Promise.reject({ error: "email already taken" }))
//     .then(user => {
//       console.log(user);
//       return user
//     })
    // .then(user =>
    //   compare(password, user[0].password_user).then(
    //     isMatch => (isMatch ? user[0] : Promise.reject({ error: "bad password" }))
    //   )
    // )
//     .catch(err => Promise.reject(err));
// };
// pour les tests
// exports.registerCredentials = registerCredentials;

/**
 * Middleware pour express (cf. http://expressjs.com/fr/guide/using-middleware.html)
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
exports.registerCredentialsMiddleware = (req, res, next) => {

  const {username, email_user, password_user, picture_path_user} = req.body;
  // console.log(req.body);
  user.addUser({username, email_user, password_user, picture_path_user})
  .then(() => {
    console.log('USER',user);
    // return res.json(user) = user;
    return user
    .getUserByUsername(username)
  })
  .then(user => {

    req.user = user
    next()
  })
    // .then(user => {
    //   req.user = user;
    //   console.log('in regis', user);
    //   console.log('in regis', user);
    //   next();
    // })
    // .catch(err => res.status(401).json(err));
};
