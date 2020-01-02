const express = require('express')
const users = require('./users.json')
const app = express()
const SERVER_PORT = 4050

app.get('/api/users', (req, res, next) => {
  // console.log('hey /api/users was hit')
  res.status(200).send(users)
})

// PARAMS
app.get('/api/users/:id', (req, res, next) => {
  // console.log(typeof req.params.id)
  const id = parseInt(req.params.id)
  if (isNaN(id)) {
    res.sendStatus(400)
  } else {
    const foundUsers = users.filter(user => user.id === id)
    res.status(200).send(foundUsers)
  }
})

// QUERY
app.get('/api/user', (req, res, next) => {
  const foundUser = users.filter(user => user.email === req.query.email)
  res.status(200).send(foundUser)
})

app.listen(SERVER_PORT, () => console.log(`Listening on port ${SERVER_PORT}`))