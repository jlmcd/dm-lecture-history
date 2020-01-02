const axios = require('axios')
let pokemon = null

// USE AXIOS TO GET INFO TO DO STUFF WITH
axios
  .get('https://pokeapi.co/api/v2/pokemon')
  .then(res => {
    pokemon = res.data
  })

module.exports = {
  getPokemon: (req, res, next) => {
    res.status(200).send(pokemon)
  }
}