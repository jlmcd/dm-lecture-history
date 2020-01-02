import { useState } from 'react'
import StyleHOC from './StyleHOC'

const ToggleRPC = (props) => {
  const [on, setOn] = useState(false)
  const {children, style} = props
  return children({on, setOn, style})
}

export default StyleHOC(ToggleRPC)
