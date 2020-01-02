import React, {Component} from 'react'
import axios from 'axios'

class Swapi extends Component {
  constructor() {
    super()
    this.state = {
      title: '',
      opener: '',
      episode: null
    }
  }

  componentDidMount() {
    axios
      .get('https://swapi.co/api/films/1')
      .then(res => {
        console.log(res)
        this.setState({
          title: res.data.title,
          opener: res.data.opening_crawl,
          episode: res.data.episode_id
        })
      })
  }

  render() {
    return (
      <div>
        <h1>Episode {this.state.episode}</h1>
        <h2>{this.state.title}</h2>
        <pre>{this.state.opener}</pre>
      </div>
    )
  }
}

export default Swapi