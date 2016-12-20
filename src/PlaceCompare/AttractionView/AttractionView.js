import React from 'react'

import {Button} from 'react-bootstrap'

import {places} from '../data'
import {attractions} from '../data'
import {additionals} from '../../Database'

import {ReservationButton} from './ReservationButton'


export default class extends React.Component {

  render() {
    console.log("1------------", this.props);
    console.log("2------------", this.props.thing.place.id);
    console.log("3------------", this.props.thing.attraction.id);
    return (
      <div>

        {
          additionals.filter(additional => this.props.thing.place.id === additional.placeId && this.props.thing.attraction.id === additional.attractionId
          ).map(additional => <p>{additional.price}</p>)
        }

        <p>{this.props.thing.place.name}</p>

        {
          additionals.filter(additional => this.props.thing.place.id === additional.placeId && this.props.thing.attraction.id === additional.attractionId
          ).map(additional => <p>{additional.availability}</p>)
        }

        {
          additionals.filter(additional => this.props.thing.place.id === additional.placeId && this.props.thing.attraction.id === additional.attractionId
          ).map(additional => <p>{additional.children === true ? 'yes':'no'}</p>)
        }

        {
          additionals.filter(additional => this.props.thing.place.id === additional.placeId && this.props.thing.attraction.id === additional.attractionId
          ).map(additional => <p>{additional.content}</p>)
        }

        {
          additionals.filter(additional => this.props.thing.place.id === additional.placeId && this.props.thing.attraction.id === additional.attractionId
          ).map(additional => <p>{additional.ranking}</p>)
        }

        {
          additionals.filter(additional => this.props.thing.place.id === additional.placeId && this.props.thing.attraction.id === additional.attractionId
          ).map(additional => <p>{additional.opinion}</p>)
        }

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

{/*<p>{additionals.filter(function(additional){*/
}
// return additional.placeId === this.props.thing.place.id && additional.attractionId === this.props.thing.attraction.id
// })}</p>

{/*<p>{this.props.place.name}</p>*/
}
{/*<p>{additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)*/
}
// ).map(item => item.availability)}</p>
{/*<p>*/
}
// {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
// ).map(item => item.children)}
// </p>
{/*<p>*/
}
// {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
// ).map(item => item.content)}
// </p>
{/*<p>*/
}
// {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
// ).map(item => item.ranking)}
// </p>
{/*<p>*/
}
// {additionals.filter(additional => additional.placeId === this.props.place.id && this.props.place.attractions.indexOf(additional.attractionId !== -1)
// ).map(item => item.opinion)}
// </p>
{/*<p>*/
}
// {
//   this.props.place.attractions.map(attraction => attraction)}
// </p>
