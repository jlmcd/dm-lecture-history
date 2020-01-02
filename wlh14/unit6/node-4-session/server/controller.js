module.exports = {
  getPoints: (req, res) => {
    if (!req.session.points) {
      req.session.points = 0
    }
    res.status(200).send(String(req.session.points += 1))
  },
  login: (req, res) => {
    if (!req.session.points) {
      req.session.points = 100
    }
    // These are all totally valid:
    // req.session.username = req.body.username
    // req.session.isCool = true
    // req.session.andrew = 'hates star wars episode IX'
    req.session.user = {
      username: req.body.username,
      profilePic: 'url'
    }
    res.status(200).send(req.session.user.username)
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send(req.session)
  }
}