import React from 'react'
import {Link} from 'react-router'
import {Button} from 'react-bootstrap'
import {Grid, Col} from 'react-bootstrap'
import {places, attractions} from '../Database'
import {connect} from 'react-redux'

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds,
  placesIds: state.attractionsData.placesIds
})

const mapDispatchToProps = dispatch => ({
  addAttractionAndPlaceToCompare: (attraction, place) => dispatch({
    type: 'ADD_ATTRACTION_AND_PLACE_TO_COMPARE',
    attraction: attraction,
    place: place
  }),
  removeAttractionAndPlaceFromCompare: (attraction, place) => dispatch({
    type: 'REMOVE_ATTRACTION_AND_PLACE_FROM_COMPARE',
    attraction: attraction,
    place: place
  })

})


class placeListItem extends React.Component {
  constructor() {
    super()

  }

  render() {
    return (
      <Grid>
        <Col xs={12}>
          <Col xs={4}>
            <p>{this.props.attraction.name}</p>
          </Col>
          <Col xs={4}>
            <ul>
              {
                places.filter(
                  place => place.attractions.indexOf(this.props.attraction.id) !== -1
                ).map(
                  place =>
                    <div>
                      <li>{place.name}</li>

                    </div>
                )
              }
            </ul>
          </Col>
          <Col xs={4}>

          </Col>
        </Col>
      </Grid>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(placeListItem)

// {
//   this.props.thingsToCompare.length < 3 ?
//
//     <Button onClick={() =>
//                         this.props.addAttractionAndPlaceToCompare
//                         (place,this.props.attraction)}
//     >Compare</Button>
//     : null
// }




// {
//   this.props.thingsToCompare.attraction.id.indexOf(place.attraction) !==-1 ?
//   <Button onClick={() =>
//   this.props.removeAttractionAndPlaceFromCompare
//   (place,this.props.attraction)}
//   >remove</Button>
//   : null
// }