const express = require('express')
const cors = require('cors')
const passport = require('passport')
const flash = require('connect-flash')
const multer = require('multer')
const bodyParser = require('body-parser')
const morgan = require('morgan');
const crypto = require('crypto')
const pwd = require('./auth/pwd.js')
// cors : permets de gérer avec qui le serveur va accepter

const userController = require('./Controllers/userController');
const bookController = require('./Controllers/bookController')

const app = express()
// express est un router: un serveur web : gérer des routes

app.use(cors()); // enables ALL
app.use(express.json()) //ce middleware express parse le json envoyé en POST
// pour un formulaire classique le middleware est : express URLencoded
//middleware transformateur de JSON qui se trouverait dans le body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('dev'));
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Davido's code
// middleware to escape simple quotes
// I use simple quotes in SQL queries (cf. model)
app.use((req, res, next) => {
  req.body = Object.entries(req.body).reduce(( acc, [key, value] ) => {
    acc[key] = (typeof value === 'string') ? value.replace(/\'/g, '\'\'') : value
    return acc
  }, {})
  next();
})

// Routes et Controller :
app.use('', userController);
app.use('', bookController);

// middleware pour une route à laquelle j'attache un controller

/////////////////////////////////////////////////////////////////////////////////////////////////////

// const storage = multer.diskStorage({
//   destination: './uploads',
//   filename: function (req, file, callback) {
//     //..
//   }
// });
//
// crypto.pseudoRandomBytes(16, function(err, raw) {
//   if (err) return callback(err);
//
//   callback(null, raw.toString('hex') + path.extname(file.originalname));
// });
//
// const upload = multer({ dest: __dirname + '/uploads' })
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // cb(null, '/home/olivia/public_html/OffBookProject/src/uploads/covers')
    cb(null, __dirname + '/../client/static/uploads/covers')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage })

app.post('/uploads', upload.single('cover'), (req, res) => {
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    const filename = req.file.filename;
    return res.send({
      success: true,
      filename
    })
  }
});

// app.use(express.static(__dirname, '/static'));





// création du serveur et connexion au port 3000

// app.listen(3000, err => {
//   // : app.listen(3000, function(err) {
//   if(err) {
//     console.log('No connexion');
//   }
//   console.log('Connexion good on port 3000!');
// })

// pwd.encodePassword('password')
//   .then( hash => pwd.comparePassword('otherPassword', hash))
//   .then( isMatch => console.log(isMatch))
//   .catch(err => console.log('error', err))


// test encode
pwd
  .encode("veggie")
  .then(hash => console.log(hash))
  .catch(err => err)
// test compare
pwd
  .encode('veggie')
  .then( hash => pwd.compare('bacon', hash))
  .then( isMatch => console.log(isMatch))
  .catch(err => console.log('error : ', err))


  // .then(hash => pwd.comparePassword("bacon", hash))
// .then(trueOrFalse => console.log("Coucou je suis : ", trueOrFalse));

module.exports = app