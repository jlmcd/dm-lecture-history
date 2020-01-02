module.exports = {
  customMiddleware: (req, res, next) => {
    console.log('hey, its the custom middleware here.')
    if (!req.session.username) {
      req.session.username = 'Michael Scarn'
    }
    next()
  },
  authenticate: (req, res, next) => {
    if (req.session.username === 'Michael Scarn') {
      next()
    } else {
      res.status(200).send(`You shall not pass`)
    }
  }
}