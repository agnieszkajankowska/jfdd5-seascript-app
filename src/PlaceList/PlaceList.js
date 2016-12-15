import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from'../PlaceListItem/'

export default (props) => (

  <div>
    <Link href='http://maps.google.com'>
      <Button>Mapa</Button>
    </Link>
    <div>
      <ul>
        <li>
          <PlaceListItem></PlaceListItem>
        </li>
      </ul>


      <Link to='place-compare'>
        <Button link>Compare</Button>
      </Link>
    </div>
  </div>
)
   