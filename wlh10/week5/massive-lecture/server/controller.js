module.exports = {
  getAllAddresses: (req, res) => {
    const db = req.app.get('db')
    db.get_all_addresses()
      .then(result => {
        res.status(200).send(result)
      })
      .catch(err => {
        console.log(err)
      })
  },
  addAddress: (req, res) => {
    const db = req.app.get('db')
    const {first_name, last_name, address, left, right} = req.body
    db.add_address({first_name, last_name, address, left, right}).then(result => {
      res.status(200).send(result)
    })
  },
  updateAddress: (req, res) => {
    const db = req.app.get('db')
    const {address} = req.body
    const {id} = req.params
    db.update_address([address, id]).then(result => {
      res.status(200).send(result)
    })
  },
  deleteAddress: (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    db.delete_address([id]).then(result => {
      res.status(200).send(result)
    })
  },
  getOneAddress: async (req, res) => {
    const db = req.app.get('db')
    const {id} = req.params
    // RUN A SQL FILE HERE:
    const result = await db.get_one_address([id])
    res.status(200).send(result)
  }
}