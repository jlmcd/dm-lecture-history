module.exports = {
  customMiddleware: (req, res, next) => {
    console.log('hey, its the custom middleware here')
    if (!req.session.user) {
      console.log('hey, you should probably log in')
    }
    next()
  },
  authenticate: (req, res, next) => {
    // ! first check to see if the user object exists
    if (req.session.user) {
      // ! if the user object exists, check the username
      if (req.session.user.username === 'Michael Scarn') {
        next()
      } else {
        res.status(200).send(`You're not allowed to be here`)
      }
    } else {
      res.status(200).send(`You should login first`)
    }
  }
}