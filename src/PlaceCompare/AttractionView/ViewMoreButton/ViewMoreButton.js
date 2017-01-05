import React from 'react'
import {
  Button, Modal, Form, FormGroup,
  ControlLabel, FormControl, Col, Checkbox
} from 'react-bootstrap'

import {PlaceDetails} from '../../../PlaceDetails'

import './ViewMoreButton.css'


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
          View More
        </Button>

        <Modal show={this.state.showModal} onHide={this.close} bsSize="large">
          <Modal.Header closeButton>
            <Modal.Title>Make a reservation</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <h4>In order to make a reservation you have to supply us with contact data</h4>
              <PlaceDetails />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

