import React from 'react'

import {places} from '../data'
import {attractions} from '../data'
import {additionals} from '../data'
import {ReservationButton} from './ReservationButton'


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
        <p>{additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
        ).map(item => item.availability)}</p>
        <ReservationButton />
      </div>
    )
  }
}

