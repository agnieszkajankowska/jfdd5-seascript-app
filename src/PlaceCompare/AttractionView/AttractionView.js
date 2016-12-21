import React from 'react'

import {Button} from 'react-bootstrap'

import { connect } from 'react-redux'

import {attractions} from '../../Database'
import {additionals} from '../../Database'

import {ReservationButton} from './ReservationButton'

const mapStateToProps = state => ({
  chosenToFavoritesAttractions: state.chosenAttractionsToFavoritesData.chosenToFavoritesAttractions
})

const mapDispatchToProps = dispatch => ({
  addAttractionToFavorites: (attraction, place) => dispatch({type: 'ADD_ATTRACTION_AND_PLACE_TO_FAVORITES', attraction: attraction, place: place}),
})


class AttractionView extends React.Component {

  render() {
    console.log("1------------", this.props);
    console.log("2------------", this.props.thing.place.id);
    console.log("3------------", this.props.thing.attraction.id);

    // function filterAttractions() {
    //   var result = [];
    //   for (var i = 0; i < this.props.thing.place.attractions.length; i++){
    //     result.concat(attractions.filter(attraction => this.props.thing.attraction.id === attraction.id))
    //   }
    //   console.log(result);
    //   return result;
    // }
    // filterAttractions();


    const additionalInformationFilter = additionals.filter(additional => this.props.thing.place.id === additional.placeId &&
      this.props.thing.attraction.id === additional.attractionId)

    return (
      <div>

        <p>{this.props.thing.attraction.name}</p>

        {additionalInformationFilter.map(additional => <p>{additional.price}</p>)}

        <p>{this.props.thing.place.name}</p>

        {additionalInformationFilter.map(additional => <p>{additional.availability}</p>)}

        {additionalInformationFilter.map(additional => <p>{additional.children === true ? 'yes':'no'}</p>)}

        {additionalInformationFilter.map(additional => <p>{additional.content}</p>)}

        {additionalInformationFilter.map(additional => <p>{additional.ranking}</p>)}

        {additionalInformationFilter.map(additional => <p>{additional.opinion}</p>)}

        <p>{
          attractions.filter(attraction => this.props.thing.place.attractions.indexOf(attraction.id) !== -1
        ).map(attraction => <li key={attraction.id}>{attraction.name}</li>)
        }</p>

        <Button onClick={() =>
          this.props.addAttractionToFavorites(this.props.thing.attraction, this.props.thing.place)}>ADD TO FAVORITES</Button>
        <Button>VIEW MORE</Button>
        <ReservationButton />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttractionView)
//wyświetlenie innych atrakcji
//podświetlenie najniższej ceny
//formularz
//widok ulubionych