import React, { useState } from 'react'
import StyleHOC from './StyleHOC'

const Toggle = ({ style, children }) => {
  const [on, setOn] = useState(false)
  return (
    <div>
      {on && children}
      <button 
        onClick={() => setOn(!on)} 
        style={style}
      >
      Show/Hide
      </button>
    </div>
  )
}

export default StyleHOC(Toggle)
