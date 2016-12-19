import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {FormGroup, ControlLabel, FormControl, Button, DropdownButton, MenuItem} from "react-bootstrap";
import {attractions} from "../Database";

const mapStateToProps = state => ({
  attractions: state.attractionsData.attractions
})

const mapDispatchToProps = dispatch => ({
  chooseAttraction: attractionId => dispatch({type: 'ADD_ATTRACTIONS', attraction: attractionId})
})


class Form extends React.Component {
  constructor() {
    super()

    this.handleSubmit = (event) => {
      event.preventDefault()
      localStorage.setItem('my-app-state', JSON.stringify(this.state))

    }

    const data = localStorage.getItem('my-app-state')
    if (data) {
      this.state = JSON.parse(data)
    } else {
      this.state = {
        attraction: []
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
          <ul>
            {attractions.map(attraction =>
              <li eventKey={attraction.name}>{attraction.name},
              <Button onClick={() => this.props.chooseAttraction(attraction.id)}>zupa</Button>
              </li>)}
          </ul>
          <Link to="place-list">
          </Link>
        </FormGroup>
      </form>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)