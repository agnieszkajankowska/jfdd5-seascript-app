import React from "react";
import {connect} from "react-redux";
import {Button, Popover, OverlayTrigger} from "react-bootstrap";
import "./AttractionView.css";
import {attractions, additionals} from "../../Database";
import {ReservationButton} from "./ReservationButton";
import {ViewMoreButton} from "./ViewMoreButton";
import FaStar from "react-icons/lib/fa/star";
import GoCheck from "react-icons/lib/go/check";
import GoX from "react-icons/lib/go/x";
import MdStars from "react-icons/lib/md/stars";

const mapStateToProps = state => ({
  thingsToCompare: state.attractionAndPlaceData.thingsToCompare,
  chosenToFavoritesAttractions: state.chosenAttractionsToFavoritesData.chosenToFavoritesAttractions
})

const mapDispatchToProps = dispatch => ({
  addAttractionToFavorites: (attraction, place) => dispatch({
    type: 'ADD_ATTRACTION_AND_PLACE_TO_FAVORITES',
    attraction: attraction,
    place: place,
    additional: additionals.find(
      additional => (
        additional.placeId === place.id &&
        additional.attractionId === attraction.id
      ))
  }),
  removeAttractionFromFavorites: (attraction, place) => dispatch({
    type: 'REMOVE_ATTRACTION_AND_PLACE_TO_FAVORITES',
    attraction: attraction,
    place: place,
    additional: additionals.find(
      additional => (
        additional.placeId === place.id &&
        additional.attractionId === attraction.id
      ))
  })
})

class AttractionView extends React.Component {

  render() {
    const placesIds = this.props.thingsToCompare.map(attraction => attraction.place.id)
    const attractionIds = this.props.thingsToCompare.map(attraction => attraction.attraction.id)
    const chosenAdditionals = additionals.filter(
      additional =>
      placesIds.indexOf(additional.placeId) !== -1 &&
      attractionIds.indexOf(additional.attractionId) !== -1
    )
    const theLowestPrice = chosenAdditionals.reduce((prev, next) => prev < next.price ? prev : next.price, Infinity)
    console.log("zzzzzzzzzz", theLowestPrice)

    const addToFavoritesPopover = (
      <Popover id="popover-trigger-hover-focus">
        Add to Favorites
      </Popover>
    );
    const removeFromFavoritesPopover = (
      <Popover id="popover-trigger-hover-focus">
       Remove from Favorites
      </Popover>
    );

    return (
      <div>
        <table>
          <tbody>
          <tr>
            <td className='table-header'>
              Activity:
            </td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price place-row' : 'other-price place-row'}>
                    {thing.attraction.name} {' '}
                    {
                      this.props.chosenToFavoritesAttractions.find(
                        attraction => {
                          return (
                            attraction.attraction.id === thing.attraction.id &&
                            attraction.place.id === thing.place.id
                          )
                        }
                      ) !== undefined ?
                        <OverlayTrigger trigger='hover' placement="top" overlay={removeFromFavoritesPopover}><a
                          className="remove-from-favorites"
                          onClick={() =>
                            this.props.removeAttractionFromFavorites
                            (thing.attraction, thing.place)}
                        ><MdStars /></a></OverlayTrigger>
                        :
                        <OverlayTrigger trigger='hover' placement="top" overlay={addToFavoritesPopover}><a
                          className="favorites"
                          onClick={() =>
                            this.props.addAttractionToFavorites
                            (thing.attraction, thing.place)}
                        ><MdStars/></a></OverlayTrigger>
                    }
                  </td>)
            }
          </tr>


          <tr>
            <td className='table-header'> Price:</td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>
                    {thing.additional.price}
                  </td>)
            }
          </tr>

          <tr>
            <td className='table-header'> City:</td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>
                    {thing.place.name}
                  </td>)
            }
          </tr>

          <tr>
            <td className='table-header'> Available:</td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>
                    {thing.additional.availability}
                  </td>)
            }
          </tr>

          <tr>
            <td className='table-header'> Children:</td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>
                    <p className="enlarge-font">{thing.additional.children === true ? <GoCheck/> : <GoX/>}</p>
                  </td>)
            }
          </tr>

          <tr>
            <td className='table-header'>
              Ranking:
            </td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price' : 'other-price'}>
                    <p className="enlarge-font">{Array(thing.additional.ranking).fill(<FaStar />)}</p>
                  </td>)
            }
          </tr>

          <tr>
            <td className='table-header'> Opinions:</td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price opinion' : 'other-price opinion'}>
                    “{thing.additional.opinion}“
                  </td>)
            }
          </tr>

          <tr>
            <td className='table-header'> Other sports available:</td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price text-align-left' : 'other-price text-align-left'}>
                    {attractions.filter(
                      attraction =>
                      thing.place.attractions.indexOf(attraction.id) !== -1
                    ).map(
                      attraction =>
                        <li key={attraction.id}>{attraction.name}</li>)}
                  </td>)
            }
          </tr>

          <tr>
            <td className='table-header'>{''}</td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price button-row' : 'other-price button-row'}>
                    <ViewMoreButton />
                  </td>)
            }
          </tr>

          <tr>
            <td className='table-header'>{''}</td>
            {
              this.props.thingsToCompare.map(
                thing =>
                  <td
                    className={theLowestPrice === thing.additional.price ? 'the-lowest-price button-row' : 'other-price button-row'}>
                    <ReservationButton attractionName={thing.attraction.name} place={thing.place.name} />
                  </td>)
            }
          </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionView)

