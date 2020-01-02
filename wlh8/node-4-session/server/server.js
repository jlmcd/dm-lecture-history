require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const ctrl = require('./controller')
const middleware = require('./middleware')

// TOP LEVEL MIDDLEWARE
app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24
  }
}))
app.use(express.static(`${__dirname}/../build`))
// app.use(middleware.customMiddleware)
// app.use(middleware.authenticate)

// ENDPOINTS
app.get('/api/points', middleware.authenticate, ctrl.getPoints)
app.post('/auth/login', ctrl.login)
app.get('/auth/logout', ctrl.logout)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} monkeys jumping on the bed.`))