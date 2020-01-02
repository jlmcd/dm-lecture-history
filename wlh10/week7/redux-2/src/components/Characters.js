import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const Characters = props => {
  return (
    <div className="characters">
      <Link to="/">
        <button>Home</button>
      </Link>
      <p>You're logged in as {props.username}!</p>
      {props.loading ? 'Loading!' : 
    props.characters.results.map(character => (
      <h2>{character.name}</h2>
    ))}
    </div>
  )
}

const mapStateToProps = globalState => {
  const { username } = globalState.userReducer
  const { characters, loading } = globalState.swapiReducer
  return { username, characters, loading }
}

export default connect(mapStateToProps)(Characters)
