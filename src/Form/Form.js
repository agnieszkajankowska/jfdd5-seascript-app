import React from "react";
import {FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem} from "react-bootstrap";
import {Places, Attraction} from "../Database";


export default class Form extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
      console.log('WTF')
      localStorage.setItem('my-app-state', JSON.stringify(this.state))

    }

    const data = localStorage.getItem('my-app-state')
    if (data) {
      this.state = JSON.parse(data)
    } else {
      this.state = {
        place: '',
        attraction: ''
      }
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
          <DropdownButton key={1} title='Choose place' id={`dropdown-basic-${1}`}
                          onSelect={(key) => this.setState({place: key})}>
            {Places.map(place =>
              <MenuItem eventKey={place.name}>{place.name}</MenuItem>
            )}
          </DropdownButton>
          <br />
          <ControlLabel>Attraction</ControlLabel>
          <FormControl
            type="text"
            value={this.state.attraction}
            onChange={
              event => this.setState({
                attraction: event.target.value
              })
            }
            placeholder="Enter attraction"
          />
          <DropdownButton key={2} title='Choose attraction' id={`dropdown-basic-${2}`}
                          onSelect={(key) => this.setState({attraction: key})}>
            {Attraction.map(attraction =>
              <MenuItem eventKey={attraction.name}>{attraction.name}</MenuItem>
            )}
          </DropdownButton>
          <br />
          <Button type="submit">Submit</Button>
        </FormGroup>
      </form>
    )
  }
}