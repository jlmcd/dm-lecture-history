import React from 'react'
import axios from 'axios'
import './App.css'
import Swapi from './Components/Swapi'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemonName: '',
      pokemonImg: '',
      pokemonImgBack: '',
      showBack: false
    }
  }

  getPokemon() {
    // console.log('getPokemon ran')
    const randomNum = Math.ceil(Math.random() * 151)
    const pokemonPromise = axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`)
    pokemonPromise.then((res) => {
      // console.log(res.data)
      this.setState({
        pokemonName: res.data.name,
        pokemonImg: res.data.sprites.front_default,
        pokemonImgBack: res.data.sprites.back_default
      })
    })
  }

  toggleImg() {
    this.setState({showBack: !this.state.showBack})
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={() => this.getPokemon()}>Get Pokemon!</button>
        <h1>{this.state.pokemonName}</h1>
        <img 
          onMouseEnter={() => this.toggleImg()}
          onMouseLeave={() => this.toggleImg()}
          src={this.state.showBack ? this.state.pokemonImgBack : this.state.pokemonImg} 
          alt={this.state.pokemonName} 
        />
        <hr/>
        <hr/>
        <hr/>
        <Swapi />
      </div>
    )
  }
}

export default App;
