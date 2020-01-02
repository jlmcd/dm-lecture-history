import React from 'react'

export default function Comments(props) {
  const comments = props.data.map(comment => (
    <h4>{comment}</h4>
  ))
  return (
    <div className='comments'>
      {comments}
    </div>
  )
}