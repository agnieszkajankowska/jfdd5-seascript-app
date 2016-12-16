import React from 'react'

import {places} from '../data'

export default class extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.attraction.price}</p>
        {places.atractions.filter(
          waterSport =>waterSport.indexOf(this.props.attraction.id) !== -1
        ).map(place => <p>{place.name}</p>)}
      </div>
    )
  }
}


