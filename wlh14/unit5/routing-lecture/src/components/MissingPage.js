import React from 'react'

const MissingPage = (props) => {
  return (
    <div>
      <h1>404</h1>
      <h3>You've found the room of requirements!</h3>
      <h4 onClick={() => props.history.goBack()}>Click to go back from whence ye came</h4>
    </div>
  )
}

export default MissingPage