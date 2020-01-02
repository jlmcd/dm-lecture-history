import React from 'react'

export default function Comments(props) {
  return (
    <div className="comments">
      <h3>Comments:</h3>
      <p>{props.data}</p>
    </div>
  )
}