require('dotenv').config()
const express = require('express')
const session = require('express-session')
const ctrl = require('./controller')
const middleware = require('./middleware')
const {SERVER_PORT, SESSION_SECRET} = process.env

const app = express()

// TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7
  }
}))
app.use(express.static(`${__dirname}/../build`))
// app.use(middleware.customMiddleware)

// ENDPOINTS:
app.get('/api/points', middleware.authenticate, ctrl.getPoints)
app.post('/auth/login', ctrl.login)
app.delete('/auth/logout', ctrl.logout)

app.listen(SERVER_PORT, () => console.log(`Oops I did it ${SERVER_PORT} more times`))