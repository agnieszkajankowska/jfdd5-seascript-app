import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {FormGroup, ListGroup, ListGroupItem, Button, Thumbnail, Grid, Row, Col, Image} from "react-bootstrap";
import {attractions} from "../Database";

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds
})

const mapDispatchToProps = dispatch => ({
  chooseAttraction: attractionId => dispatch({type: 'ADD_ATTRACTION', attractionId: attractionId}),
  removeAttraction: (attractionId) => dispatch({
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
      <Grid>
        <form onSubmit={this.handleSubmit}>
          <ListGroup>
            <h1>Attraction</h1>
            <Row className="show-grid">
              {attractions.map(attraction =>
                <Col xs={6} md={3} sm={4}>
                  <li key={attraction.id}>
                    {
                      this.props.attractionsIds.indexOf(attraction.id) === -1 ?

                        <Thumbnail src={process.env.PUBLIC_URL + '/images/icons/attractions/' + attraction.image}
                                   onClick={() => this.props.chooseAttraction(attraction.id)}>
                          <p>{attraction.name}</p>
                        </Thumbnail> :

                        <Thumbnail src={process.env.PUBLIC_URL + '/images/icons/attractions/' + attraction.image}
                                   onClick={() => this.props.removeAttraction(attraction.id)}>
                          <p>{attraction.name}</p>
                        </Thumbnail>
                    }
                  </li>
                </Col>
              )}


            </Row>
            <Link to="place-list">
              <Button type="submit">Submit</Button>
            </Link>
          </ListGroup>
        </form>
      </Grid>
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