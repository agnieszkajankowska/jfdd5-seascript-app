import React from 'react'

import {places} from '../data'
import {attractions} from '../data'

export default class extends React.Component {

  render() {
    console.log(places)
    console.log(attractions.map(attraction=> attraction.id))
    return (
      <div>
        <p>
          {
            this.props.place.factor *
            attractions.map(attraction => attraction.price)
          }
        </p>
        <p>{this.props.place.name}</p>
        <p>{this.props.place.availability}</p>
        <p>{this.props.place.availability}</p>


      </div>
    )
  }
}

