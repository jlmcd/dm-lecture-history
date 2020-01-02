module.exports = {
  addSessionData: (req, res, next) => {
    if (req.body.username || req.session.username) {
      next()
    } else {
      res.status(401).send('Not authorized')
    }
  },
  authenticate: (req, res, next) => {
    if (req.session.username === 'Michael Scarn') {
      next()
    } else {
      res.status(401).send('Not authorized!')
    }
  }
}