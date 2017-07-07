const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const notes = []

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.use(bodyParser.json())

app.post('/notes', (req, res) => {
  notes.push(req.body)
  res.sendStatus(201)
})

app.put('/notes/:id', (req, res) => {
  const note = notes.find(note => {
    return note.id === req.params.id
  })
  if (!note) {
    return res.sendStatus(404)
  }
  Object.assign(note, req.body)
  res.sendStatus(200)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
