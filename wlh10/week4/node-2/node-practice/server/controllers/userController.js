const users = require('../userData.json')

module.exports = {
  getAllUsers: (req, res, next) => {
    res.status(200).send(users)
  }
}