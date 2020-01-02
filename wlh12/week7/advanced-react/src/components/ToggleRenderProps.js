import React, { useState } from 'react'
import StyleHOC from './StyleHOC'

const ToggleRenderProps = (props) => {
  const [on, setOn] = useState(false)
  const {style} = props
  return (
    <div>
      {props.render({on, setOn, style})}
    </div>
  )
}

export default StyleHOC(ToggleRenderProps)