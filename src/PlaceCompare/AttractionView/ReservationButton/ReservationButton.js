import React from "react";
import {Button, Modal} from "react-bootstrap";
import ReservationView from "./ReservationView/ReservationView";


class ReservationModal extends React.Component {

  constructor() {
    super()


    this.state = {
      showModal: false,
    }

    this.close = () =>
      this.setState({showModal: false});


    this.open = () =>
      this.setState({showModal: true});
  }



  render() {
    return (
      <div>
        {this.props.session === null ?
        < Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
          disabled
          >
          BOOK NOW
          </Button> :
          < Button
            bsStyle="primary"
            bsSize="large"
            onClick={this.open}
          >
            BOOK NOW
          </Button>
        }

        <Modal show={this.state.showModal} onHide={this.close} >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.attractionName} in {this.props.place} </Modal.Title>
          </Modal.Header>
          <Modal.Body id="reservationModalBody" >



            <ReservationView attractionName={this.props.attractionName} attractionImage={this.props.attractionImage} place={this.props.place} />

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