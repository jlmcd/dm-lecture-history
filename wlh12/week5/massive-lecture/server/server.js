require('dotenv').config()
const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')
const {SERVER_PORT, CONNECTION_STRING} = process.env

const app = express()

app.use(express.json())

app.get('/api/user', ctrl.getAllUsers)
app.post('/api/user', ctrl.addUser)
app.put('/api/user/:id', ctrl.updateAddress)
app.delete('/api/user/:id', ctrl.deleteUser)

massive(CONNECTION_STRING).then(databaseConnection => {
  app.set('db', databaseConnection)
  console.log('Database connected')
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} monkeys jumping on the bed.`))
})