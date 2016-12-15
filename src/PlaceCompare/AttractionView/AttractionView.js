import React from 'react'


export default class extends React.Component {
  render() {

    return (
      <div>
        <h1>Price: {this.props.attraction.price} </h1>
      </div>
    )
  }
}

