const users = require('./users.json')

function returnUserById(id) {
  return users.filter(user => user.id === id)
}

module.exports = returnUserById