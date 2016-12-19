import React from "react";
import {FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem} from "react-bootstrap";
import {attractions} from "../Database";


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
        attraction: ''
      }
    }
  }


  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup>
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
            {attractions.map(attraction =>
              <MenuItem eventKey={attraction.name}>{attraction.name}</MenuItem>
            )}
          </DropdownButton>
          <Button type="submit">Submit</Button>
        </FormGroup>
      </form>
    )
  }
}