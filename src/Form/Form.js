import React from "react";
import {Link} from "react-router";
import {connect} from "react-redux";
import {ListGroup, Button, Thumbnail, Grid, Row, Col} from "react-bootstrap";
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

  render() {
    return (
      <Grid>
        <form>
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

