import React, { Component } from 'react'

export default class Grass extends Component {
  constructor() {
    super()
    this.state = {
      pokemonName: '',
      pokemonImg: '',
      toggle: false
    }
  }
  catchPokemon() {
    const body = {
      name: this.props.pokeData.name,
      img: this.props.pokeData.sprites.front_shiny
    }
    this.props.catchFn(body)
    this.setState({ toggle: true })
  }

  render() {
    return (
      <div className='grass'>
        {this.state.toggle ? null : <h4>{this.props.pokeData.name}</h4>}
        {this.state.toggle ? null : (
          <img
            onClick={() => this.catchPokemon()}
            src={this.props.pokeData.sprites.front_shiny}
            alt={this.props.pokeData.name}
          />
        )}
      </div>
    )
  }
}
