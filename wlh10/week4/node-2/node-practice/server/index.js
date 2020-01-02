const express = require('express')
const app = express()
const SERVER_PORT = 1337
const userCtrl = require('./controllers/userController')
const swapiCtrl = require('./controllers/swapiController')

app.use(express.json())

// ENDPOINTS:
app.get('/api/users', userCtrl.getAllUsers)
app.get('/api/swapi', swapiCtrl.getStarWarsPeople)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} monkeys jumping on the bed`))