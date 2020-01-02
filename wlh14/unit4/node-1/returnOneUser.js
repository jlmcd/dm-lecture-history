const users = require('./users.json')

// * Write a function that returns one user matching an id passed 
// * in as a parameter
function getUserById(id) {
  // const foundUser = users.filter((user) => user.id === id)
  // return foundUser[0]
  // * Find the index:
  const index = users.findIndex(el => el.id === id)
  // * Return the user at that index
  return users[index]
}

module.exports = getUserById