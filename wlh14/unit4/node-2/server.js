const express = require('express')
const app = express()
const SERVER_PORT = 4000
const ctrl = require('./controller')
const pokeCtrl = require('./pokeController')

// * TOP LEVEL MIDDLEWARE
app.use(express.json())

// * Todo endpoints
app.get('/api/todo', ctrl.getTodos)
app.post('/api/todo', ctrl.addTodo)
app.put('/api/todo/:id', ctrl.updateTodo)
app.delete('/api/todo/:id', ctrl.deleteTodo)

// * Pokemon Endpoints
app.get('/api/pokemon', pokeCtrl.getPokemon)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))