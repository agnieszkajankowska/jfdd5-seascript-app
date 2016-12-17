import React from "react";
import {FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem} from "react-bootstrap";
import {Attraction} from "../Database";
import {places2} from "../Database";


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
    console.log(places2.map(function(place) { return place.attractions.map(function (attraction) {
      return attraction.type
    })}))


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
            {places2.map(function(place) { return place.attractions.map(function (attraction) {
             return attraction.type
            })}).reduce(function(a,b) {
              return a.concat(b)
            }).filter( function (elem,index,array){
              return array.indexOf(elem) === index
            }).map(element => <MenuItem eventKey={element}>{element}</MenuItem>)
            }

          </DropdownButton>
          <Button type="submit">Submit</Button>
        </FormGroup>
      </form>
    )
  }
}