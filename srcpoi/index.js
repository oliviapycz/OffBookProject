const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
app.use(cors())
const connectionString = 'postgresql://postgres:changeme@localhost:5432/tododb'

const { Client } = require('pg')
const client = new Client({
  connectionString: connectionString
})
client.connect()
.then( () => {
  console.log('success')
})
.catch( (err) => {
  console.log('error')
})


// app.get('/', function(req, res) {
//   //
// })

app.get('/', (req, res) => {
  res.send('Hello to Me and to the reload and nodemon')
})

app.get('/users', async (req, res) => {
  const data = await client.query('SELECT * from users')
  console.log(data.rows)
  res.send(data.rows)
})

app.get('/categories', async (req, res) => {
  const data = await client.query('SELECT * from categories')
  console.log(data.rows)
  res.send(data.rows)
})

app.get('/todos', async (req, res) => {
  const data = await client.query('SELECT * from todos')
  console.log(data.rows)
  res.send(data.rows)
})

app.get('/users/:id/', (req, res) => {
    const { id } = req.params;
    client.query(`SELECT id, todo, user_id FROM todos, users_todos WHERE id = todo_id AND user_id = ${id}`).then(data=>{
        console.log(data);
        res.json(data.rows);
    }).catch(err => {
        console.log('error:', err)
    })
});

app.post('/users', (req, res) => {
    const { lastname, firstname } = req.body
    console.log(req.body);
    client.query('INSERT INTO users(id, lastname, firstname) VALUES (DEFAULT, $1, $2);', [lastname, firstname]).then(data => {
        res.json(data)
    }).catch(err => {
        res.send(JSON.stringify(err))
    })
})


app.put('/users/:id', (req, res) => {
    const { id } = req.params
    const { lastname, firstname } = req.body
    console.log(req.body);
    const data = client.query(`UPDATE users SET id= '${id}', lastname = '${lastname}', firstname = '${firstname}' WHERE users.id = '${id}'`).then(data => {
        res.json(data)
    }).catch(err => {
        res.send(JSON.stringify(err))
    })
})

app.listen(3000, err => {
  if (err) {
    console.log('NO CONNEXION')
  }
  console.log('connexion established on port 3000')
})
