const { Client } = require('pg');
const db = new Client({
  connectionString : 'postgres://postgres:simplon@localhost:5433/offbook'
})

db.connect((err) => {
  if (err) {
    return console.log(err)
  }
  console.log('DB CONNECTED !!!!')
})

module.exports = db