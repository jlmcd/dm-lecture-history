const users = require('../userData.json')
let id = 21

module.exports = {
  test: (req, res, next) => {
    res.status(200).send('you got me')
  },
  getAllUsers: (req, res, next) => {
    res.status(200).send(users)
  },
  addUser: (req, res, next) => {
    const {first_name, last_name, email, gender, ip_address} = req.body
    users.push({
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email,
      gender: gender,
      ip_address: ip_address
    })
    id++
    res.status(200).send(users)
  },
  updateUser: (req, res, next) => {
    const {first_name, last_name, email, gender, ip_address} = req.body
    const {id} = req.params
    const userIndex = users.findIndex((user) => user.id === +id)
    users[userIndex] = {id: +id, first_name, last_name, email, gender, ip_address}
    res.status(200).send(users)
  },
  deleteUser: (req, res, next) => {
    const {id} = req.params
    // FIND THE INDEX OF THE USER WITH THE MATCHING ID
    const index = users.findIndex(user => user.id === +id)
    // SPLICE OUT THE OBJECT AT THAT INDEX
    users.splice(index, 1)
    res.status(200).send(users)
  }
}
