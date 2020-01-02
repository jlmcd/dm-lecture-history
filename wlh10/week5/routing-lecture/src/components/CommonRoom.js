import React from 'react'
import {Link, Route, withRouter} from 'react-router-dom'

const CommonRoom = ({match, secondaryColor, mainColor}) => {
  const {housename} = match.params
  return (
    <>
      <header style={{background: secondaryColor, color: mainColor}}>
        <h2>Welcome to <span>{housename}</span></h2>
      </header>
      <Route path='/house/:housename/:studentName' component={({match}) => (
        <h3>
          Don't forget your potions exam, {match.params.studentName}.
        </h3>
      )} />
      <nav>
        <Link to="/">Great Hall</Link>
        <Link to="/about">History Of Magic</Link>
      </nav>
    </>
  )
}

export default withRouter(CommonRoom)