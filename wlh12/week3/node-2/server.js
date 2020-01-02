const express = require('express')
const SERVER_PORT = 1337
const ctrl = require('./controllers/controller')
const pokeCtrl = require('./controllers/pokeCtrl')
const app = express()

app.use(express.json())

app.get('/api/test', ctrl.test)

// USER ENDPOINTS:
app.get('/api/users', ctrl.getAllUsers)
app.post('/api/users', ctrl.addUser)
app.put('/api/users/:id', ctrl.updateUser)
app.delete('/api/users/:id', ctrl.deleteUser)

// SWAPI ENDPOINTS:
app.get('/api/pokemon', pokeCtrl.getPokemon)

app.listen(SERVER_PORT, ()=> console.log(`${SERVER_PORT} monkeys jumping on the bed.`))