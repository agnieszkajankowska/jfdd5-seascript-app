import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import { Grid, Row, Col} from 'react-bootstrap'


export default class extends React.Component {
  constructor() {
    super()

  }
  render () {
    return (
        <Col xs={12}>
          <Col xs={4}>
            <p>{this.props.place.name}</p>
          </Col>
          <Col xs={4}>
            <p>jakieś lorem ipsum i inne info na temat miasta czy jakieś inne info</p>
          </Col>
          <Col xs={4}>
            <Link to='place-compare'>
              <Button link>Compare</Button>
            </Link>
          </Col>
        </Col>
    )
  }
}