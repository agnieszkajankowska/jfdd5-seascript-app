import React from 'react'
import {
  Button, Modal
} from 'react-bootstrap'

import {PlaceDetails} from '../../../PlaceDetails'

import './WeatherButton.css'


export default React.createClass({
  getInitialState() {
    return {showModal: false};
  },

  close() {
    this.setState({showModal: false});
  },

  open() {
    this.setState({showModal: true});
  },

  render() {
    return (
      <div>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          Weather conditions
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} bsStyle="primary" bsSize="large" dialogClassName="modal-width" >
          <Modal.Header closeButton>
            <Modal.Title>Actual weather conditions</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PlaceDetails placeName={this.props.placeName}/>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
});

