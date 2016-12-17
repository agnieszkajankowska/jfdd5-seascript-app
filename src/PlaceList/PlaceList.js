import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {Places} from '../Database'
import {Attraction} from '../Database'
import {places2} from '../Database'

export default (props) => {
  



  return (

  <div>
    <Link href='http://maps.google.com'>
      <Button>Mapa</Button>
    </Link>
    <div>
      {places2.map( place =>
        <PlaceListItem place={place}/>)}
    </div>
  </div>
)}
