module.exports = {
  login: (req, res, next) => {
    req.session.username = req.body.username
    req.session.points = 100
    req.session.side = 'both'
    req.session.food = 'Tacos'
    req.session.user = {
      username: req.body.username,
      profilePic: 'url',
      cart: []
    }
    res.status(200).send(req.session.username)
  },
  getPoints: (req, res, next) => {
    console.log(req.session.points)
    res.status(200).send(String(req.session.points))
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send('logged out')
  }
}