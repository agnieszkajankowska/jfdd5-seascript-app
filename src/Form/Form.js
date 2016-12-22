import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {FormGroup, Button, Image, Thumbnail} from "react-bootstrap";
import {attractions} from "../Database";

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds
})

const mapDispatchToProps = dispatch => ({
  chooseAttraction: attractionId => dispatch({type: 'ADD_ATTRACTION', attractionId: attractionId}),
  removeAttraction: (attractionId) => dispatch ({
    type: 'REMOVE_ATTRACTION',
    attractionId: attractionId
})
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
          <h1>Attraction</h1>

          <ul>
            {attractions.map(attraction =>
              <li key={attraction.id}>
                { this.props.attractionsIds.indexOf(attraction.id) === -1 ?
                  <Thumbnail src={process.env.PUBLIC_URL + '/images/icons/attractions/' + attraction.image}
                             onClick={() => this.props.chooseAttraction(attraction.id)}>
                    {attraction.name}</Thumbnail> :
                  <Thumbnail src={process.env.PUBLIC_URL + '/images/icons/attractions/' + attraction.image}
                             onClick={() => this.props.removeAttraction(attraction.id)}>
                    You choose {attraction.name}. Click to remove.</Thumbnail>}
                </li>)}
          </ul>

          <Link to="place-list">
            <Button type="submit">Submit</Button>
          </Link>
        </FormGroup>
      </form>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form)


// <ul>
// {attractions.map(attraction =>
//   <li key={attraction.id}>
//     { this.props.attractionsIds.indexOf(attraction.id) === -1 ?
//       <Button onClick={() => this.props.chooseAttraction(attraction.id)}>Add {attraction.name}</Button> :
//       <Button onClick={() => this.props.removeAttraction(attraction.id)}>Remove {attraction.name}</Button>}
//   </li>)}
// </ul>