import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const CommonRoom = props => {
  return (
    <>
      <header
        style={{
          background: props.secondaryColor,
          color: props.mainColor
        }}
      >
        <h2>Welcome to {props.match.params.name}</h2>
      </header>
      <nav>
        <Link to="/">Great Hall</Link>
        <Link to="/about">History of Magic</Link>
      </nav>
    </>
  )
}

export default withRouter(CommonRoom)
