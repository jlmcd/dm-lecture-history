const express = require('express')
const app = express()
const SERVER_PORT = 4000
const ctrl = require('./controller')

app.get('/api/users', ctrl.getAllUsers)

// * PARAMS:
app.get('/api/users/:id', ctrl.getUserById)

// * QUERY:
app.get('/api/user', ctrl.getUserByEmail)

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))