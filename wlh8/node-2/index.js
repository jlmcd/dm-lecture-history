const express = require('express')
const app = express()
const SERVER_PORT = 4000
const data = require('./mockData.json')

app.use((req, res, next) => {
  req.params.id += 'is the coolest'

})

app.get('/api/users', (req, res) => {
  res.status(200).send(data)
})
app.get('/api/users/:id', (req, res) => {
  const user = data.filter(user => user.id === +id)[0]
  res.status(200).send(user)
  
})

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} ducks marching on Rome`))