import React from 'react'
import StyleHOC from './StyleHOC'

const SimplerButton = (props) => {
  return (
    <button style={props.style}>Simpler Button</button>
  )
}

export default StyleHOC(SimplerButton)