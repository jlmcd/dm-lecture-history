import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonArray: []
    }
    this.catchPokemon = this.catchPokemon.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
    this.saveName = this.saveName.bind(this)
  }
  catchPokemon(body) {
    axios.post('/api/pokemon', body).then(res => {
      this.setState({pokemonArray: res.data})
    })
  }
  releasePokemon(id) {
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.setState({pokemonArray: res.data})
    })
  }
  saveName(id, body) {
    axios.put(`/api/pokemon/${id}`, body).then(res => {
      this.setState({pokemonArray: res.data})
    })
  }
  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
      this.setState({
        pokemonArray: res.data
      })
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Finder catchFn={this.catchPokemon} />
        <Pokedex 
          pokemonArray={this.state.pokemonArray} 
          releaseFn={this.releasePokemon}
          saveFn={this.saveName}
        />
      </div>
    )
  }
}

export default App
