import React, { Component } from 'react'
import Post from './Post'

export default class Blog extends Component {
  constructor() {
    super()
    this.state = {
      posts: [
        {
          title: 'Post 1',
          body: '',
          comments: ['I love this blog', 'comment 2', 'comment 3'],
          id: 1
        },
        {
          title: 'Post 2',
          body: 'lwoeifjwoiefjowiefoiwefoiwejfoiwejfoiwejfw',
          comments: ['comment 1', 'comment 2', 'comment 3'],
          id: 2
        },
        {
          title: 'Post 3',
          body: 'lwoeifjwoiefjowiefoiwefoiwejfoiwejfoiwejfw',
          comments: ['comment 1', 'comment 2', 'comment 3'],
          id: 3
        }
      ]
    }
  }

  render() {
    const posts = this.state.posts.map(postObj => (
      <Post 
        key={postObj.title}
        postInfo={postObj}
      />
    ))
    return (
      <div className='blog'>
        {/* POST HERE */}
        {posts}
      </div>
    )
  }
}
