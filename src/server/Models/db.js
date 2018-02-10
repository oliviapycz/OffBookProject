/*
**
***
NODEJS with MYSQL
https://github.com/mysqljs/mysql
***
**
*/

const mysql = require('mysql');
// let connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'phpmyadmin',
//   password : 'simplon',
//   database : 'OFFBOOKS'
// });
const connectionString = 'mysql://phpmyadmin:simplon@localhost/OffBookProject?debug=false&charset=BIG5_CHINESE_CI&timezone=-0700'

const db = mysql.createConnection(connectionString);


db.connect((err) => {
  if (err) {
    return console.log(err)
  } else {
    console.log('db connected');
  }
})


// we transform the callbacks into promises
db.connectQuery = (query) => new Promise( (resolve, reject) => {
  db.query(query, (err, result) => {
    err ? reject(err) : resolve(result)
  })
})

db.quoteEscape = (str) => str.replace('\'', '\'\'')

module.exports = db;
