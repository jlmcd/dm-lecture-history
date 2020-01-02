import React, { Component } from 'react'
import Pokemon from './Pokemon'

export default class Pokedex extends Component {

  render() {
    return (
      <div>
        <h2>Pokedex</h2>
        <div className='pokemon-list'>
          {this.props.pokemonArray.map(el => (
            <Pokemon 
              key={el.id} 
              data={el} 
              releaseFn={this.props.releaseFn}
              saveFn={this.props.saveFn}
            />
          ))}
        </div>
      </div>
    )
  }
}
