import React from 'react'

import {FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'


export default class Form extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
      this.setState({

      })
    }

    this.state = {
      place: '',
      atraction: ''
    }
  }

  render() {
    return (
      <form>
        <FormGroup onSubmit={this.handleSubmit}>
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
        <Button type="submit">Submit</Button>
      </form>
    )
  }
}