import React, {Component} from 'react'
import axios from 'axios'

export default class Swapi extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      height: ''
    }
  }

  componentDidMount() {
    axios
      .get('https://swapi.co/api/people/3')
      .then(res => {
        console.log(res.data)
        this.setState({
          name: res.data.name,
          height: res.data.height
        })
      })
  }

  render() {
    return (
      <div>
        <h2>{this.state.name} is {Math.floor(this.state.height / 30.48)}ft {(this.state.height / 2.54 % 12).toPrecision(2)}in tall</h2>
      </div>
    )
  }
}