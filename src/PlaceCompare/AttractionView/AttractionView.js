import React from 'react'

import {places} from '../data'
import {attractions} from '../data'

export default class extends React.Component {

  render() {
    console.log(places)
    return (
      <div>
        <p>{this.props.place.factor * attractions[0].price}</p>
        <p>
          {places.filter(
            place => place.attractions.indexOf(this.props.attraction.id) !== -1
          ).map(
            place => place.name)}
          </p>
      </div>
    )
  }
}

