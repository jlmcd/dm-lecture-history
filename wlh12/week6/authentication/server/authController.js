const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    /*
      0. grab my db connection, destructure my body
      1. Check to see if the email already exists in the database
        a. if so, send proper response (can't register)
      2. If the email is NOT in the db, hash and salt the password
      3. create a new user in the db
      4. put new user on session
      5. respond with the user information
    */

    // SETUP:
    const db = req.app.get('db')
    const { email, password } = req.body

    // 1. Check if email is already in use:
    const result = await db.find_user(email)
    if (result[0]) return res.status(200).send({ message: 'Email already in use.' })

    // 2. hash and salt the password
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    // 3. Add hash and user to DB
    const hashId = await db.add_hash(hash)
    const {hash_id} = hashId[0]
    const createdUser = await db.add_cust({email, hash_id})

    // 4. Place user on session
    req.session.user = {id: createdUser[0].cust_id, email: createdUser[0].email}

    // 5. Respond with the user info
    res.status(200).send({message: 'Logged in', userData: req.session.user})
  },
  login: async (req, res) => {
    /*
      1. check if an email has an account.
      2. If it is not found, stop function and send message.
      3. If it is found, rehash the password and compare hashes
      4. If hashes don't match, send appropriate response
      5. If hashes DO match, send appropriate response
      6. Add user to session
    */
    const db = req.app.get('db')
    const { email, password } = req.body

    // check if email has an account
    const user = await db.find_hash(email)
    // not found - send message
    if (!user[0]) return res.status(200).send({message: 'Email not found'})
    // email was found - compare hashes
    const result = bcrypt.compareSync(password, user[0].hash_value)
    if (result === true) {
      req.session.user = {id: user[0].cust_id, email: user[0].email}
      return res.status(200).send({message: 'Logged in', userData: req.session.user})
    } else {
      res.status(200).send({message: 'Password incorrect'})
    }
  },
  logout: (req, res) => {
    req.session.destroy()
    res.status(200).send({message: 'Logged out'})
  }
}
