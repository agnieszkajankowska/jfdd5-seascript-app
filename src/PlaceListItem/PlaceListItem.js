import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col} from 'react-bootstrap'
import {places, attractions} from '../Database'

export default class extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Grid>
        <Col xs={12}>
          <Col xs={4}>
            <p>{this.props.attraction.name}</p>
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
    console.log(this.props)
  }
}