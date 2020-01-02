import React from 'react'
import Comments from './Comments'

export default function Post(props) {
  return (
    <div className='post'>
      <h1>{props.postInfo.title}</h1>
      <p>{props.postInfo.body}</p>
      {/* COMMENTS HERE: */}
      <Comments data={props.postInfo.comments} />
    </div>
  )
}