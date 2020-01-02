import React, {Component} from 'react';
import './App.css';
import axios from 'axios'
import Swapi from './components/Swapi'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pokemonName: '',
      pokemonImg: '',
      pokemonImg2: '',
      pokemonNum: null,
      showBack: false
    }
  }

  getPokemon() {
    // console.log('getPokemon ran')
    const pokemonPromise = axios.get('https://pokeapi.co/api/v2/pokemon/empoleon/')
    pokemonPromise.then(res => {
      // console.log(res)
      this.setState({
        pokemonName: res.data.name,
        pokemonImg: res.data.sprites.front_default,
        pokemonImg2: res.data.sprites.back_default,
        pokemonNum: `#${res.data.id}`
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
          src={this.state.showBack ? this.state.pokemonImg2 : this.state.pokemonImg} 
          alt={this.pokemonName}
        />
        <h2>{this.state.pokemonNum}</h2>
        <hr/>
        <hr/>
        <hr/>
        <Swapi />
      </div>
    )
  }
}

export default App;
