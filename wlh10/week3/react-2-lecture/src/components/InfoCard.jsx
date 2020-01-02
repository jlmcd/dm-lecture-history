import React, {Component} from 'react'

class InfoCard extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="info-card">
        <h3>Name: {this.props.name}</h3>
        <h3>Age: {this.props.age}</h3>
        <h3>Email: {this.props.email}</h3>
        <h3>Phone: {this.props.phone}</h3>
        <h3>Address: {this.props.address}</h3>
        <h3>Website: {this.props.website}</h3>
      </div>
    )
  }
}

export default InfoCard