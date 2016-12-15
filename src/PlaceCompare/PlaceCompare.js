import React from 'react'
import {places, attractions} from './data'
import { AttractionView } from './AttractionView'


export default () => (
  <div>
    <h1>List of chosen attractions</h1>
    {
      attractions.map(
        attraction => <AttractionView attraction={attraction} />
      )
    }

  </div>
)