const express = require('express')
const app = express()

const notes = []

app.get('/', (req, res) => {
  res.json(notes)
  console.log(notes)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
