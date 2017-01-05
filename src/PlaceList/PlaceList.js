import React from 'react'
import {Button, ButtonToolbar, ButtonGroup} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {connect} from 'react-redux'
import {places, attractions} from '../Database'
import './PlaceList.css'

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds
})

const placeList = props => (

  <div>
    <ButtonToolbar>
      <ButtonGroup>
        <Button>Form</Button>
        <Button>Place List</Button>
        <Button>Compare</Button>
        <Button>Book now</Button>
      </ButtonGroup>
    </ButtonToolbar>
  <br/>
    <Link href='http://maps.google.com'>
      <Button>Mapa</Button>
    </Link>
    <div>
      {attractions.filter(attraction => props.attractionsIds.indexOf(attraction.id) !== -1).map(attraction =>
        <PlaceListItem attraction={attraction}/>)}
    </div>
    <Link to='/place-compare'>
      <Button>
        place compare
      </Button>
    </Link>
  </div>

)

export default connect(mapStateToProps)(placeList)