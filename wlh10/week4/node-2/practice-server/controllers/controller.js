const characters = ['Mario', 'Mario', 'DK']

module.exports = {
  getAllCharacters: (req, res, next) => {
    res.status(200).send(characters)
  },
  addCharacter: (req, res, next) => {
    // const newCharacter = req.body.character
    const {character} = req.body
    characters.push(character)
    res.status(200).send(characters)
  },
  editCharacter: (req, res, next) => {
    const {index} = req.params
    const {updatedCharacter} = req.body
    characters.splice(index, 1, updatedCharacter)
    res.status(200).send(characters)
  },
  deleteCharacter: (req, res, next) => {
    const {index} = req.params
    characters.splice(index, 1)
    res.status(200).send(characters)
  }
}