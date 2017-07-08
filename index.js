const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const notes = []

app.get('/notes', (req, res) => {
  res.json(notes)
})

app.use(bodyParser.json())

let noteIndex = 0
app.post('/notes', (req, res) => {
  req.body.id = noteIndex++
  notes.push(req.body)
  res.sendStatus(201)
})

app.put('/notes/:id', (req, res) => {
  const note = notes.find(note => {
    const noteId = Number(req.params.id)
    return note.id === noteId
  })
  if (!note) {
    return res.sendStatus(404)
  }
  Object.assign(note, req.body)
  res.sendStatus(200)
})

app.delete('/notes/:id', (req, res) => {
  const noteId = Number(req.params.id)
  const index = notes.findIndex((note) => {
    return note.id === noteId
  })
  if (index === -1) {
    return res.sendStatus(404)
  }
  notes.splice(index, 1)
  res.sendStatus(204)
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
