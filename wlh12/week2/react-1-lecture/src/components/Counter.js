import React, {Component} from 'react'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
    this.plusOne = this.plusOne.bind(this)
  }

  plusOne() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.plusOne}>
          Click ME!
        </button>
      </div>
    )
  }
}

export default Counter