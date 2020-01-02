require('dotenv').config()
const express = require('express')
const session = require('express-session')
const ctrl = require('./messagesCtrl')
const { SERVER_PORT, SESSION_SECRET } = process.env

const app = express()

app.use(express.json())
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: SESSION_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 // ! one hour
    }
  })
)
app.use((req, res, next) => {
  let badWords = ['knucklehead', 'jerk', 'internet explorer']
  if (req.body.message) {
    for (let i = 0; i < badWords.length; i++) {
      let regex = new RegExp(badWords[i], 'g')
      req.body.message = req.body.message.replace(regex, '****')
    }
    next()
  } else {
    next()
  }
})

app.get('/api/messages', ctrl.getAllMessages)
app.post('/api/message', ctrl.createMessage)
app.get('/api/messages/history', ctrl.history)

app.listen(SERVER_PORT, () =>
  console.log(
    `${SERVER_PORT} monkeys jumping on the bed 1 fell off and bumped his head ${SERVER_PORT -
      1} monkeys jumping on the bed`
  )
)
