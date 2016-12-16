import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {Places} from '../Database'
import {Attraction} from '../Database'


export default (props) => {
  



  return (

  <div>
    <Link href='http://maps.google.com'>
      <Button>Mapa</Button>
    </Link>
    <div>
      {Attraction.map( attraction =>
        <PlaceListItem attraction={attraction}/>)}
    </div>
  </div>
)}
