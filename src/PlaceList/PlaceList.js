import React from 'react'
import {Button, Modal} from 'react-bootstrap'
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
        <Link to='/place-compare'>
          <Button>place compare</Button>
        </Link>
        <Button onClick={() => this.props.showMap()}>Mapa</Button>

        {
          this.props.mapData.map(
            oneMapData =>
              oneMapData.isMapVisible) === true ?
            <div className="static-modal">
              <Modal.Dialog>
                <Modal.Header>
                  <Modal.Title>Map with positions of attractions</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                  <div style={{height: 300, width: 568}}>
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
                </Modal.Body>

                <Modal.Footer>
                  <Button>Close</Button>
                </Modal.Footer>
              </Modal.Dialog>
            </div> :
            <div></div>
        }
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(placeList)