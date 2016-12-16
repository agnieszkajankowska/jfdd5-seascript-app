import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col} from 'react-bootstrap'
import {Places, Attraction} from '../Database'

export default class extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Grid>
        <Col xs={12}>
          <Col xs={4}>
            <p>{this.props.place.name}</p>
          </Col>
          <Col xs={4}>
            <p>{ Places.map(
              place => place.attractions
            )}</p>
          </Col>
          <Col xs={4}>
            <Link to='place-compare'>
              <Button link>Compare</Button>
            </Link>
          </Col>
        </Col>
      </Grid>
    )
  }
}