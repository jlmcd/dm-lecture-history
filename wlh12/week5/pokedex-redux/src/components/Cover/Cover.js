import React from 'react'
import { Link } from 'react-router-dom'
import { setUsername, getPokemon, setLoginStatus } from '../../ducks/reducer'
import { connect } from 'react-redux'

const Cover = (props) => {
  if (props.isLoggedIn) {
    props.history.push('/open')
  }
  const clickLogin = () => {
    props.getPokemon('https://pokeapi.co/api/v2/pokemon')
    props.setLoginStatus(true)
  }
  return (
    <div className="cover">
      <div className="background">
        <div className="camera-ring">
          <div className="camera-circle" />
        </div>
        <div className="circles-container">
          <div className="little-circle red" />
          <div className="little-circle yellow" />
          <div className="little-circle green" />
        </div>
        <div className="lid">
          <Link to="/open">
            <div 
              className="triangle-button" 
              onClick={() => clickLogin()}
            />
          </Link>
          <div className="inputs">
            <input 
              placeholder="Username" 
              type="text" 
              onChange={e => props.setUsername(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = reduxState => {
  return {...reduxState}
}
const mapActionsToProps = {
  setUsername,
  setLoginStatus,
  getPokemon
}

export default connect(mapStateToProps, mapActionsToProps)(Cover)
