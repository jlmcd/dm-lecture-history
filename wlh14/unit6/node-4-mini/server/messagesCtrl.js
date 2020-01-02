const allMessages = []

module.exports = {
  getAllMessages: (req, res) => {
    res.status(200).send(allMessages)
  },
  createMessage: (req, res) => {
    const {username, message} = req.body
    allMessages.push({username, message})
    if (!req.session.history) {
      req.session.history = []
    }
    req.session.history.push({username, message})
    res.status(200).send(allMessages)
  },
  history: (req, res) => {
    res.status(200).send(req.session.history)
  }
}