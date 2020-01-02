import React, {Component} from 'react'
import Grass from './Grass'
import axios from 'axios'

export default class Finder extends Component {
  constructor() {
    super()
    this.state = {
      grassArr: []
    }
    this.catchOne = this.catchOne.bind(this)
  }
  componentDidMount() {
    axios.get('/api/grass').then(res => {
      this.setState({
        grassArr: res.data
      })
    })
  }
  catchOne(body) {
    this.props.catchFn(body)
    this.componentDidMount()
  }
  render() {
    return (
      <div className='finder'>
        {this.state.grassArr.map(pokemon => (
          <Grass 
            key={pokemon.name} 
            pokeData={pokemon}
            catchFn={this.catchOne}
          />
        ))}
      </div>
    )
  }
}