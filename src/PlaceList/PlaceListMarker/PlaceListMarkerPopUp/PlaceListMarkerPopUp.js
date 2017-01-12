import React from 'react'
import {attractions} from '../../../Database'

export default (props) => (
  <div>
    {
      attractions.filter(
        attraction =>
          props.attractions.indexOf(attraction.id) !==-1
      ).map(
        attraction =>
        <p>
          {attraction.name}
      </p>
          )
    }
  </div>
)