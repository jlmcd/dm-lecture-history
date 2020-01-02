import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getPokemon} from '../../ducks/pokeReducer'

const Open = (props) => (
  <div className="open">
    <div className="background">
      <div className="camera-ring">
        <Link to='/'>
          <div className="camera-circle" />
        </Link>
      </div>
      <div className="circles-container">
        <div className="little-circle red" />
        <div className="little-circle yellow" />
        <div className="little-circle green" />
      </div>
      <div className="inside">
        <h1>Welcome, {props.user}!</h1>
        {props.loading ? 'Loading...' : props.pokemon.results.map(el => (
          <h3 key={el.name}>
            {el.name}
          </h3>
        ))}
      <button 
        disabled={!props.pokemon.previous}
        onClick={() => props.getPokemon(props.pokemon.previous)}
      >
        {'<<<'}
      </button>
      <button 
        disabled={!props.pokemon.next}
        onClick={() => props.getPokemon(props.pokemon.next)}
      >
        {'>>>'}
      </button>
      </div>
    </div>
  </div>
)

function mapStateToProps(reduxState) {
  const {user} = reduxState.userReducer
  const {pokemon, loading} = reduxState.pokeReducer
  return {user, pokemon, loading}
}

  // TWO PARAMS FOR CONNECT:
  // 1. a function that takes in redux state and returns an object with the state we want for the component
  // 2. an object that contains any action builders
export default connect(mapStateToProps, {getPokemon})(Open)