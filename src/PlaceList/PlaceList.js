import React from 'react'
import {Button, Col} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {connect} from 'react-redux'
import GoogleMap from 'google-map-react'
import {places, attractions} from '../Database'
import './PlaceList.css'

import PlaceListMarker from './PlaceListMarker/PlaceListMarker'

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds,
  placesIds: state.attractionsData.placesIds,
  mapData: state.isAMap.mapData
});

const mapDispatchToProps = dispatch => ({
  showMap: () => dispatch({
    type: 'SHOW_MAP'
  }),
  hideMap: () => dispatch({
    type: 'HIDE_MAP'
  })
});

class placeList extends React.Component {
  constructor() {
    super()
  }

  render() {

    {
      attractions.filter(
        attraction =>
        this.props.attractionsIds.indexOf(attraction.id) !== -1
      ).map(
        attraction => {
          attraction.id,
            places.filter(
              place =>
              place.attractions.indexOf(attraction.id) !== -1
            ).map(
              place =>
                console.log(place.name)
            )
        }
      )
    }
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
              console.log("zzzzzzzzz", place.name)
          )
      )
    }

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
          <submit className="PlaceListButton" onClick={() => this.props.showMap()}>Map</submit>
        </Col>
        <Col xs={4}>
          <Link className="PlaceListLink" to='/place-compare'>
          <submit className="PlaceListButton">compare</submit>
        </Link>
        </Col>
        <Col xs={2}/>
        {
          this.props.mapData[this.props.mapData.length - 1].isMapVisible ?
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
                            <PlaceListMarker lat={place.latitude}
                                             lng={place.longitude}/>
                        )
                    )
                  }
                </GoogleMap>
              </div>

              <div className="PlaceListMapPopupFooter">
                <submit className="PlaceListCloseButton" onClick={() => this.props.hideMap()}>Close</submit>
              </div>
            </div>
            </div>
            :
            <div></div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(placeList)