import React from "react";
import {Button, Modal} from "react-bootstrap";
import ReservationView from "./ReservationView/ReservationView";


class ReservationModal extends React.Component {

  constructor() {
    super()


    this.state = {
      showModal: false
    }

    this.close = () =>
      this.setState({showModal: false});


    this.open = () =>
      this.setState({showModal: true});
  }



  render() {
    return (
      <div>
        <p>Click here to make a reservation!</p>

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          BOOK NOW
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Make a reservation {this.props.attractionName} in {this.props.place} </Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <h4>In order to make a reservation you have to supply us with contact data</h4>
            <ReservationView attractionName={this.props.attractionName} place={this.props.place} />

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ReservationModal