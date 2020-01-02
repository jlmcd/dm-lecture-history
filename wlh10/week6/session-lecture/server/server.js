require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const ctrl = require('./controller')
const middleware = require('./middleware')
const { SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.static(`${__dirname}/../build`))
app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 30
  }
}))
app.use(middleware.addSessionData)

// ENDPOINTS:
app.post('/api/login', ctrl.login)
app.get('/api/points', middleware.authenticate, ctrl.getPoints)
app.delete('/api/logout', ctrl.logout)

app.listen(SERVER_PORT, () =>
  console.log(`Oops I did it ${SERVER_PORT} more times.`)
)
