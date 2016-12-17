import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col} from 'react-bootstrap'
import {places2} from '../Database'

export default class extends React.Component {
  constructor() {
    super()

  }

  render() {
    console.log(this.props)
    return (
      <Grid>
        <Col xs={12}>
          <Col xs={4}>
            <p>{this.props.place.name}</p>
          </Col>
          <Col xs={4}>
            <ul>{
              places2.filter(
                place => place.attractions.type = "Sailing"
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