import React, { Component } from 'react'
import Post from './Post'

export default class Blog extends Component {
  constructor() {
    super()
    this.state = {
      posts: [
        {
          title: 'WOw, what a blog',
          body:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quaerat corrupti, voluptas aperiam optio est blanditiis aliquam omnis perferendis iusto repudiandae temporibus. Velit recusandae veniam amet tempore sit ea qui?',
          comments: ['I love this blog', 'Some other commnet', 'wowza.']
        },
        {
          title: 'Post numba 2',
          body:
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, fugit distinctio autem ex at esse expedita delectus, aspernatur atque explicabo nemo molestiae ratione soluta vitae hic harum, facere iusto! Voluptatibus.',
          comments: ['eoifjwef', 'weofjfow jefowj f', 'yay']
        },
        {
          title: 'Posty post.',
          body:
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque labore facilis, ad incidunt vel aut aliquam cum? Dicta corrupti maiores provident culpa laboriosam, blanditiis cum nobis obcaecati, omnis rerum fugit!',
          comments: [
            'coolio.',
            'I love posting on blogs',
            'weofijwef',
            'efwojweofiwj'
          ]
        }
      ]
    }
  }

  render() {
    const posts = this.state.posts.map(postObj => (
      <Post 
        postInfo={postObj} 
        key={postObj.title} 
      />
    ))
    return (
      <div className="blog">
        {/* BLOG POSTS HERE: */}
        Blog
        {posts}
      </div>
    )
  }
}
