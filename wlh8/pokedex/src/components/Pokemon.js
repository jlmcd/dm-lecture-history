import React, { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.data.name,
      editing: false
    }
  }
  toggleEdit() {
    this.setState({ editing: !this.state.editing })
  }
  handleChange(e) {
    this.setState({ name: e.target.value })
  }
  save() {
    this.props.saveFn(this.props.data.id, { name: this.state.name })
    this.toggleEdit()
  }
  render() {
    return (
      <div className='pokemon'>
        {this.state.editing ? (
          <div>
            <input
              type="text"
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
            <button onClick={() => this.save()}>Save</button>
            <button onClick={() => this.toggleEdit()}>Cancel</button>
          </div>
        ) : (
          <h3 onClick={() => this.toggleEdit()}>{this.props.data.name}</h3>
        )}
        <div className="img">
          <img src={this.props.data.img} alt="" />
        </div>
        <button onClick={() => this.props.releaseFn(this.props.data.id)}>
          Release
        </button>
      </div>
    )
  }
}

export default Pokemon
