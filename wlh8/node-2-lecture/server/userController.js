const users = require('./userData.json')

module.exports = {
  getAllUsers: (req, res, next) => {
    res.status(200).send(users)
  },
  getOneUser: (req, res, next) => {
    const user = users.filter(obj => obj.id === parseInt(req.query.id))
    res.status(200).send(user)
  },
  addUser: (req, res) => {
    // console.log(req.body)
    users.push(req.body)
    res.status(201).send(users)
  },
  updateUser: (req, res) => {
    // console.log(req.params, req.body)
    const { id } = req.params

    const user = users.filter(obj => obj.id === +id) // returns an array
    const index = users.findIndex(user => user.id === +id)

    // if the user array is empty, return an error
    if (!user.length === 1) {
      return res.status(409).send('no user with that id found')
    }
    req.body.id = user[0].id

    // Update user object with modified data
    user[0] = req.body

    // Replace user object in array with modified user object (user[0])
    users.splice(index, 1, user[0])

    // Send updated users array
    res.status(200).send(users)
  },
  deleteUser: (req, res) => {
    const {id} = req.params
    const index = users.findIndex(user => user.id === +id)
    if (index === -1) {
      return res.status(418).send('user not found')
    }
    const deletedUser = users.splice(index, 1)
    res.status(200).send(deletedUser)
  }
}
