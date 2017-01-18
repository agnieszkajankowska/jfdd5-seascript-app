import React from 'react'
import { Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {connect} from 'react-redux'
import GoogleMap from 'google-map-react'
import {places, attractions} from '../Database'
import './PlaceList.css'

import PlaceListMarker from './PlaceListMarker/PlaceListMarker'

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds,
  placesIds: state.attractionsData.placesIds
});



class placeList extends React.Component {
  constructor() {
    super()
    
    this.state = {
      mapVisible: false
    }
  }

  render() {


    return (

      <div>
        <div>
          {
            attractions.filter(
              attraction =>
              this.props.attractionsIds.indexOf(attraction.id) !== -1
            ).map(attraction =>
              <PlaceListItem attraction={attraction}/>)}
        </div>
        <Col xs={2}/>
        <Col xs={4}>
          <submit className="PlaceListButton" onClick={() => this.setState({
          mapVisible: true
          })}>Map</submit>
        </Col>
        <Col xs={4}>
          <Link className="PlaceListLink" to='/place-compare'>
          <submit className="PlaceListButton">compare</submit>
        </Link>
        </Col>
        <Col xs={2}/>
        {
          this.state.mapVisible ?
            <div className="PlaceListMapPopupPosition">
            <div className="PlaceListMapPopup">
              <div className="PlaceListMapPopupHeader">
                <h3>Map with positions of attractions</h3>
              </div>

              <div className="PlaceListMapPopupBody">
                <GoogleMap
                  bootstrapURLKeys={{key: "AIzaSyBVlbumvSGRU1nYUEcirKV3YJCQEI_wQfE"}}
                  defaultCenter={{
                    lat: 52,
                    lng: 20
                  }}
                  defaultZoom={5}>
                  {
                    attractions.filter(
                      attraction =>
                      this.props.attractionsIds.indexOf(attraction.id) !== -1
                    ).map(
                      attraction =>
                        places.filter(
                          place =>
                          place.attractions.indexOf(attraction.id) !== -1
                        ).map(
                          place =>
                            <PlaceListMarker key={place.id} 
                                             lat={place.latitude}
                                             lng={place.longitude}
                                             attractions={place.attractions}/>
                        )
                    )
                  }
                </GoogleMap>
              </div>

              <div className="PlaceListMapPopupFooter">
                <submit className="PlaceListCloseButton" onClick={() => this.setState({
                mapVisible: false
                })}>Close</submit>
              </div>
              <ul>
                {
                  attractions.filter(
                    attraction =>
                    this.props.attractionsIds.indexOf(attraction.id) !== -1
                  ).map(
                    attraction =>
                      <li key={attraction.id}>{attraction.name}</li>
                  )
                }
              </ul>
            </div>
            </div>
            :
            <div></div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps)(placeList)