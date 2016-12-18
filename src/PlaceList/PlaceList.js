import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {places} from '../database'
import {attractions} from '../database'


export default (props) => {
  



  return (

  <div>
    <Link href='http://maps.google.com'>
      <Button>Mapa</Button>
    </Link>
    <div>
      {attractions.map( attraction =>
        <PlaceListItem attraction={attraction}/>)}
    </div>
  </div>
)}
