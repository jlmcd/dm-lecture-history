import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <header>
        <div className="logo">
          <h1>Logo!</h1>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Something Else</li>
            <li>Another Link</li>
            <li>Yet another</li>
            <li>Last One</li>
          </ul>
        </nav>
      </header>
    )
  }
}
