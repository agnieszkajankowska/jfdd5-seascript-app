import React from 'react'
import {Button, Modal} from 'react-bootstrap'
import {Link} from 'react-router'
import {PlaceListItem} from '../PlaceListItem'
import {connect} from 'react-redux'
import {places, attractions} from '../Database'
import './PlaceList.css'

const mapStateToProps = state => ({
  attractionsIds: state.attractionsData.attractionsIds
})

const mapDispatchToProps = dispatch => ({
  showMap: dispatch({
    type: 'showMap'
  }),
  hideMap: dispatch({
    type: 'hideMap'
  })
})

class placeList extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (

      <div>
        <div>
          {attractions.filter(attraction => this.props.attractionsIds.indexOf(attraction.id) !== -1).map(attraction =>
            <PlaceListItem attraction={attraction}/>)}
        </div>
        <Link to='/place-compare'>
          <Button>place compare</Button>
        </Link>
        <Button onClick={() => this.props.showMap()}>Mapa</Button>

        {this.showMap === true ?
          <div className="static-modal">
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Map with positions of attractions</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                mapa
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