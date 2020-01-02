const pokemonCaught = [
  {
    id: 1,
    name: 'Dratini',
    img:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/147.png'
  },
  {
    id: 2,
    name: 'Rhydon',
    img:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/112.png'
  },
  {
    id: 3,
    name: 'Magneton',
    img:
      'https://o.aolcdn.com/images/dims?quality=85&image_uri=http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F6623d5a6ae583f81ee3515b6b3615c7f%2F204855766%2Flandscape-1456483171-pokemon2.jpg&client=amp-blogside-v2&signature=a66341cc83efebc3c63cadf0db972d9a16e1b05d'
  }
]
let id = 4

module.exports = {
  getAll(req, res) {
    res.status(200).send(pokemonCaught)
  },
  catch(req, res) {
    pokemonCaught.push({...req.body, id})
    id++
    res.status(200).send(pokemonCaught)
  },
  delete(req, res) {
    const {id} = req.params
    const index = pokemonCaught.findIndex(pokemon => (
      pokemon.id === parseInt(id)
    ))
    pokemonCaught.splice(index, 1)
    res.status(200).send(pokemonCaught)
  },
  rename(req, res) {
    const {id} = req.params
    const {name} = req.body
    const index = pokemonCaught.findIndex(pokemon => (
      pokemon.id === +id
    ))
    pokemonCaught[index].name = name
    res.status(200).send(pokemonCaught)
  }
}