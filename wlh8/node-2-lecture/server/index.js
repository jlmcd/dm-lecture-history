const express = require('express')
const app = express()
const SERVER_PORT = 4000
const userCtrl = require('./userController')
const middleware = require('./middleware')
const swapiCtrl = require('./swapiController')

app.use(express.json())

app.get('/api/users', userCtrl.getAllUsers) // Get all users
app.get('/api/user', userCtrl.getOneUser) // Get user by ID
app.post('/api/users', middleware.addId, userCtrl.addUser) // Add new user
app.put('/api/users/:id', userCtrl.updateUser)
app.delete('/api/users/:id', userCtrl.deleteUser)

app.get('/api/swapi', swapiCtrl.getPeople)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} rubber duckies!`))
