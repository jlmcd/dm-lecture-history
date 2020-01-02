const users = require('./index')
console.log(users)

function returnUserById(id) {
  return users.users.filter(user => user.id === id)
}

module.exports = returnUserById