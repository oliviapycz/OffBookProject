const { Client } = require('pg');
const db = new Client({
  // connectionString : 'postgres://postgres:simplon@localhost:5433/offbook'
  connectionString: 'postgres://tziyjabkbclldy:7337c1e4743281ee800536c594bc2cc52049a2f05bdc17b3e98f598b8230d9a9@ec2-54-225-200-15.compute-1.amazonaws.com:5432/daflla8o8578vr',
  ssl: true
})

db.connect((err) => {
  if (err) {
    return console.log(err)
  }
  console.log('DB CONNECTED !!!!')
})

module.exports = db