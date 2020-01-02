import React, {Component} from 'react'
import Add from './Add'
import Subtract from './Subtract'

export default class Numbers extends Component {
  constructor() {
    super()
    this.state = {
      number: 0
    }
    this.add = this.add.bind(this)
    this.subtract = this.subtract.bind(this)
  }

  add() {
    this.setState({
      number: this.state.number + 1
    })
  }

  subtract() {
    this.setState({
      number: this.state.number - 1
    })
  }

  render() {
    return (
      <div className="numbers">
        <h2>{this.state.number}</h2>
        <Add addFn={this.add} />
        <Subtract subtractFn={this.subtract} />
      </div>
    )
  }
}