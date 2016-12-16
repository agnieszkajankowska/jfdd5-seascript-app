import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {Places} from '../Database'
import {Atraction} from '../Database'


export default (props) => {
  



  return (

  <div>
    <Link href='http://maps.google.com'>
      <Button>Mapa</Button>
    </Link>
    <div>
      {Atraction.map( place =>
        <PlaceListItem place={place}/>)}
    </div>
  </div>
)}
   