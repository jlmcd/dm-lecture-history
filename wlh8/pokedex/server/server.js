const express = require('express')
const app = express()
const PORT = 1337
const grassCtrl = require('./grassCtrl')
const pokemonCtrl = require('./pokemonCtrl')

app.use(express.json())

app.get('/api/grass', grassCtrl.getPokemon)

app.get('/api/pokemon', pokemonCtrl.getAll)
app.post('/api/pokemon', pokemonCtrl.catch)
app.delete('/api/pokemon/:id', pokemonCtrl.delete)
app.put('/api/pokemon/:id', pokemonCtrl.rename)

app.listen(PORT, () => console.log(`${PORT} fluffy clouds`))