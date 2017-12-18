let mysql = require('mysql');
// let connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'phpmyadmin',
//   password : 'simplon',
//   database : 'OFFBOOKS'
// });
const connectionString = 'mysql://phpmyadmin:simplon@localhost/OffBookProject?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700'
let connection = mysql.createConnection(connectionString);


connection.connect();
//
// connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
//   if (err) throw err;
//   console.log('The solution is: ', rows[0].solution);
// });
//
// connection.end();

// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });


// connection.end();
module.exports = connection;
