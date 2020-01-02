import React, { Component } from 'react'

class Jonathan extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Jonathan</h1>
        <h2>The instructor</h2>
        <h3>Age: {this.props.age}</h3>
        <h3>Hobbies: {this.props.hobbies}</h3>
      </div>
    )
  }
}

export default Jonathan
