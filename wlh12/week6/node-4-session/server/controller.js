module.exports = {
  getPoints: (req, res) => {
    if (!req.session.points) {
      req.session.points = 0
    }
    res.status(200).send(String(req.session.points += 1))
  },
  login: (req, res) => {
    req.session.username = req.body.username
    if (!req.session.points) {
      req.session.points = 100
    }
    req.session.isCool = true
    req.session.user = {
      username: req.body.username,
      profilePic: 'url',
    }
    res.status(200).send(req.session.username)
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send('Logged out successfully')
  }
}