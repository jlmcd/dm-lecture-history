const axios = require('axios')
let pokemonList = []

axios.get('https://pokeapi.co/api/v2/pokemon/').then(res => {
  pokemonList = res.data.results
})

module.exports = {
  getPokemon: (req, res) => {
    res.status(200).send(pokemonList)
  }
}