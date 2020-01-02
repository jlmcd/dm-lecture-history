const users = require('./users.json')

module.exports = {
  getAllUsers: (req, res, next) => {
    // console.log('hey, /api/users was hit!')
    return res.status(200).send(users)
  },
  getUserById: (req, res, next) => {
    // console.log(typeof req.params.id) 
    // ! Even if you're sending digits, the data type will be "string"
    const index = users.findIndex(user => user.id === Number(req.params.id))
    return res.status(200).send(users[index])
  },
  getUserByEmail: (req, res, next) => {
    const foundUser = users.filter(user => user.email.includes(req.query.email))
    return res.status(200).send(foundUser)
  }
}