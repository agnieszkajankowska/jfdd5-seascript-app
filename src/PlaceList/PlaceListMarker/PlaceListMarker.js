import React from 'react'
import {PlaceListMarkerPopUp} from './PlaceListMarkerPopUp'

export default (props) => (
  <div>
    <img src={process.env.PUBLIC_URL + '/images/icons/iconmonstr-pin-12.svg'}
       alt = ""
         style={{
           height:30,
           position: 'absolute',
           left: -15,
           top: -30,
           fill: 'pink'
         }}
    />
  </div>
)
