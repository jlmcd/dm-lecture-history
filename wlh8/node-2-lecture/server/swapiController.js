const axios = require('axios')
let people = null

// Axios to get info to work with
axios.get('https://swapi.co/api/people')
  .then(res => {
    people = res.data
  })

module.exports = {
  getPeople: (req, res) => {
    res.status(200).send(people)
  }
}