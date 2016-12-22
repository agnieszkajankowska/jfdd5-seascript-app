import React from 'react'

import {Button} from 'react-bootstrap'
import './AttractionView.css'

import {attractions} from '../../Database'


import {ReservationButton} from './ReservationButton'

class AttractionView extends React.Component {

  render() {

    const additional = this.props.thing.additional
    return (

      <div className={this.props.theLowestPrice === additional.price ? 'the-lowest-price' : 'other-price'}>
        <p>
          {
            this.props.thing.attraction.name
          }
        </p>

        <p>
          {
            this.props.theLowestPrice === additional.price ?
              <strong>{additional.price}</strong> :
              additional.price
          }
        </p>

        <p>{this.props.thing.place.name}</p>

        <div>
          <p>{additional.availability}</p>
          <p>{additional.children === true ? 'yes' : 'no'}</p>
          <p>{additional.content}</p>
          <p>{additional.ranking}</p>
          <p>{additional.opinion}</p>
        </div>

        <p>
          {
            attractions.filter(attraction =>
              this.props.thing.place.attractions.indexOf(attraction.id) !== -1
            ).map(attraction => <li key={attraction.id}>{attraction.name}</li>)
          }
        </p>

        <Button onClick={() =>
          this.props.addAttractionToFavorites(this.props.thing.attraction, this.props.thing.place)}>
          ADD TO FAVORITES</Button>

        <Button>VIEW MORE</Button>

        <ReservationButton />
      </div>
    )
  }
}

export default AttractionView
