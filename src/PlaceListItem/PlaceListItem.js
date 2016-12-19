import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col} from 'react-bootstrap'
import {places, attractions} from '../Database'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  attractions: state.attractionsData.attractions
})

class placeListItem extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Grid>
        <Col xs={12}>
          <Col xs={4}>
            <p>{attractions.id}</p>
          </Col>
          <Col xs={4}>
            <ul>{
              places.filter(
                place => place.attractions.indexOf(this.props.attraction.id) !== -1
              ).map(
                place =>
                <li>{place.name}</li>
              )
            }</ul>
          </Col>
          <Col xs={4}>
            <Link to='place-compare'>
              <Button>Compare</Button>
            </Link>
          </Col>
        </Col>
      </Grid>
    )
  }
}


export default connect(mapStateToProps)(placeListItem)