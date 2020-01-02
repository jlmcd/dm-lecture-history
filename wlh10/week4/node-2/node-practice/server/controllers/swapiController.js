const axios = require('axios')
let people = null

// USE AXIOS TO GET INFO TO DO STUFF WITH
axios.get('https://swapi.co/api/people')
  .then(res => {
    people = res.data
  })

module.exports = {
  getStarWarsPeople: (req, res, next) => {
    res.status(200).send(people)
  }
}