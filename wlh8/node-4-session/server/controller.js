module.exports = {
  getPoints: (req, res) => {
    console.log('hit')
    res.status(200).send(String(req.session.points))
  },
  login: (req, res) => {
    req.session.username = req.body.username
    req.session.points = 100
    req.session.isCool = true
    req.session.pokemon = 'Pikachu'
    req.session.user = {
      username: req.body.username,
      profilePic: 'url'
    }
    res.status(200).send(req.session.username)
  },
  logout: (req, res) => {
    req.session.destroy()
  }
}