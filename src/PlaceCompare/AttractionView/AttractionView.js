import React from 'react'

import {Button} from 'react-bootstrap'

import {attractions} from '../data'
import {additionals} from '../../Database'

import {ReservationButton} from './ReservationButton'


export default class extends React.Component {

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

        {additionalInformationFilter.map(additional => <p>{additional.price}</p>)}

        <p>{this.props.thing.place.name}</p>

        {additionalInformationFilter.map(additional => <p>{additional.availability}</p>)}

        {additionalInformationFilter.map(additional => <p>{additional.children === true ? 'yes':'no'}</p>)}

        {additionalInformationFilter.map(additional => <p>{additional.content}</p>)}

        {additionalInformationFilter.map(additional => <p>{additional.ranking}</p>)}

        {additionalInformationFilter.map(additional => <p>{additional.opinion}</p>)}

        <p>{
          attractions.filter(attraction => this.props.thing.place.attractions.indexOf(this.props.thing.attraction.id) !== -1
        ).map(attraction => attraction.name)
        }</p>

        <Button>ADD TO FAVORITES</Button>
        <ReservationButton />
      </div>
    )
  }
}

//wyświetlenie innych atrakcji
//podświetlenie najniższej ceny
//formularz
//widok ulubionych