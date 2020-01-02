const express = require('express')
const app = express()
const SERVER_PORT = 4000
const ctrl = require('./controllers/controller')

app.use(express.json())

// ENDPOINTS:
app.get('/api/character', ctrl.getAllCharacters)
app.post('/api/character', ctrl.addCharacter)
app.put('/api/character/:index', ctrl.editCharacter)
app.delete('/api/character/:index', ctrl.deleteCharacter)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on Rome`))