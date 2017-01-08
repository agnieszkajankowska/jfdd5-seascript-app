import React from 'react'
import {Button, Grid, Col, Row, Popover, OverlayTrigger} from "react-bootstrap";

import MdStars  from 'react-icons/lib/md/stars'
import './FavoriteView.css'

class FavoriteView extends React.Component {
  render() {
    const popoverHoverFocus = (
      <Popover id="popover-trigger-hover-focus">
        Remove from Favorites
      </Popover>
    );
    return (
      <div className="favorite-container">
        <div className="favorite-photo-container">
          <OverlayTrigger trigger='hover' placement="top" overlay={popoverHoverFocus}>
            <a className="favorites-remove-button"
               onClick={() =>
                 this.props.removeAttractionFromFavorites(this.props.attraction.attraction, this.props.attraction.place)}
            ><MdStars/></a>
          </OverlayTrigger>
          <img
            src={process.env.PUBLIC_URL + '/images/company-logos/' + this.props.attraction.additional.companyPhoto}
            role="presentation"
            className="company-photo"
          />
        </div>
        <h3 className="favorite-attraction-name">{this.props.attraction.attraction.name}</h3>
        <p className="favorite-place-name">{this.props.attraction.place.name}</p>
        <p>
          <Button bsStyle="primary"
                  bsSize="large"
          >Go to website...</Button>&nbsp;
        </p>
      </div>
    )
  }
}

export default FavoriteView