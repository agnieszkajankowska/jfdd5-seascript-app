import React from "react";
import {connect} from "react-redux";
import {Button, Modal} from "react-bootstrap";
//import { DatePicker } from "react-bootstrap-date-picker"



class ReservationModal extends React.Component {

  constructor() {
    super()

    this.state = {
      showModal: false,
      name: '',
      surname: ''
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
            <Modal.Title>Make a reservation</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <h4>In order to make a reservation you have to supply us with contact data</h4>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReservationModal)