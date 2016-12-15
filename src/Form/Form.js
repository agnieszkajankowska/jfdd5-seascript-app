import React from 'react'

import {FormGroup, ControlLabel, FormControl} from 'react-bootstrap'

export default class Form extends React.Component {
  constructor() {
    super()

    this.state = {
      place: '',
      atraction: ''
    }
  }

  render() {
    return (
      <form>
        <FormGroup>
          <ControlLabel>Places</ControlLabel>
          <FormControl
            type="text"
            value={this.state.place}
            onChange={
              event => this.setState({
                place: event.target.value
              })
            }
            placeholder="Enter place"
          />
          <ControlLabel>Atraction</ControlLabel>
          <FormControl
            type="text"
            value={this.state.atraction}
            onChange={
              event => this.setState({
                atraction: event.target.value
              })
            }
            placeholder="Enter atraction"
          />
        </FormGroup>
      </form>
    )
  }
}