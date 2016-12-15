import React from 'react'

import {FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem } from 'react-bootstrap'

import { places, atraction } from '../Database'




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
          <DropdownButton key={1} title='Suggested places' id={`dropdown-basic-${1}`}>
            {places.map(place =>
            <MenuItem eventKey="1">{place.name}</MenuItem>
            )}
          </DropdownButton>
          <br />
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
          <DropdownButton key={2} title='Suggested atractions' id={`dropdown-basic-${1}`}>
            {atraction.map(atraction =>
              <MenuItem eventKey="2">{atraction.name}</MenuItem>
            )}
          </DropdownButton>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </form>
    )
  }
}