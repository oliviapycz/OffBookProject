const express = require('express')
const path = require('path')

const app = express();

app.use('/', require('./server/server'))


app.use('/', express.static(path.join(__dirname, 'client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
})

const port = process.env.PORT || 3000

app
  .listen(port, () => {
    console.log("connected from index");
  })
.on("error", err => console.log("erreur de connexion : ", err));