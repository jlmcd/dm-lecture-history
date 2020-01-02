import React, {Component} from 'react'

export default class Subtract extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button onClick={() => this.props.subtractFn()}>Subtract</button>
    )
  }
}