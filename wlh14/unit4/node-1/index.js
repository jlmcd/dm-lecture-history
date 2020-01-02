const users = require('./users.json')
const getUserById = require('./returnOneUser')

// * Write a function that returns all users in the users array
function getAllUsers() {
  return users
}



// * Write a function that returns one user matching an email passed
// * in as a parameter
function getUserByEmail(email) {
  // * Find the index
  const index = users.findIndex(el => {
    if (el.email === email) {
      return true
    } else {
      return false
    }
  })

  // * Return the user object at that index:
  return users[index]
}

function getAllGoogleEmails() {
  return users.filter(user => {
    if (user.email.includes('google.com')) {
      return true
    } else {
      return false
    }
  })
  // return users.filter(user => user.email.includes('google.com'))
}


// ! For checking to see if it worked:
console.log(getUserById(9))


