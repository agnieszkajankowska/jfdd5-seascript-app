import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from'../PlaceListItem'

export default (props) => {
  



  return (

  <div>
    <Link href='http://maps.google.com'>
      <Button>Mapa</Button>
    </Link>
    <div>
      {places.map( place => <PlaceListItem></PlaceListItem>)}
    </div>
  </div>
)}
   