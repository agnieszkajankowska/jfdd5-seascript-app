import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  attractions: state.attractionsData.attractions
})

const placeList = props => (

  <div>
    <Link href='http://maps.google.com'>
      <Button>Mapa</Button>
    </Link>
    <div>
      {props.attractions.map(attraction =>
        <PlaceListItem attraction={attraction}/>)}
    </div>
  </div>

)

export default connect(mapStateToProps)(placeList)