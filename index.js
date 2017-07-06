const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const notes = []

app.get('/', (req, res) => {
  res.json(notes)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

app.use(bodyParser.json())
