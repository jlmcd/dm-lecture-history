import React, {Component} from 'react'
import Add from './Add'
import Subtract from './Subtract'

export default class Numbers extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
    this.subtract = this.subtract.bind(this)
    this.add = this.add.bind(this)
  }

  subtract() {
    this.setState({number: this.state.number - 1})
  }
  add() {
    this.setState({number: this.state.number + 1})
  }

  render() {
    return (
      <div className="numbers">
        <h1>{this.state.number}</h1>
        <Add addFn={this.add} />
        <Subtract subtractFn={this.subtract} />
      </div>
    )
  }
}