require('dotenv').config()
const express = require('express')
const massive = require('massive')
const {SERVER_PORT, CONNECTION_STRING} = process.env
const ctrl = require('./controller')

const app = express()

app.use(express.json())

app.get('/api/address', ctrl.getAllAddresses)
app.post('/api/address', ctrl.addAddress)
app.put('/api/address/:id', ctrl.updateAddress)
app.delete('/api/address/:id', ctrl.deleteAddress)
app.get('/api/address/:id', ctrl.getOneAddress)

massive(CONNECTION_STRING).then(databaseConnection => {
  app.set('db', databaseConnection)
  app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on Rome`))
})
