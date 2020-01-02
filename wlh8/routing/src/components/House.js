import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const House = ({match, mainColor, secondaryColor}) => {
  return (
    <>
      <header style={{background: secondaryColor, color: mainColor}}>
        <h2>Welcome to {match.params.name}</h2>
      </header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </>
  )
}

export default withRouter(House)
