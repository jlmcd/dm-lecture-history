require('dotenv').config()
const express = require('express')
const session = require('express-session')
const app = express()
const {SERVER_PORT, SESSION_SECRET} = process.env
const messagesCtrl = require('./messagesCtrl')

app.use(express.json())
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60
  }
}))
app.use((req, res, next) => {
  let badWords = ['knucklehead', 'jerk', 'internet explorer'];
  if (req.body.message) {
    for (let i = 0; i < badWords.length; i++) {
      let regex = new RegExp(badWords[i], 'g');
      req.body.message = req.body.message.replace(regex, '****');
    }
    next();
  } else {
    next();
  }
});

app.get('/api/messages', messagesCtrl.getAllMessages)
app.post('/api/message', messagesCtrl.createMessage)
app.get('/api/messages/history', messagesCtrl.history)

app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} happy little trees`))