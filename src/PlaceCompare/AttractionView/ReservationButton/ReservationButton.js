import React from 'react'
import { Button, Modal, Form, FormGroup,
ControlLabel, FormControl, Col, Checkbox} from 'react-bootstrap'


export default React.createClass({
  getInitialState() {
    return { showModal: false };
  },

  close() {
    this.setState({ showModal: false });
  },

  open() {
    this.setState({ showModal: true });
  },

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

            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={10}>
                  <FormControl type="name" placeholder="Name" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Surname
                </Col>
                <Col sm={10}>
                  <FormControl type="surname" placeholder="Surname" />
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Email
                </Col>
                <Col sm={10}>
                  <FormControl type="email" placeholder="Email" />
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Checkbox>I agree on terms and conditions</Checkbox>
                </Col>
              </FormGroup>

              <FormGroup>
                <Col smOffset={2} sm={10}>
                  <Button type="submit">
                    BOOK
                  </Button>
                </Col>
              </FormGroup>
            </Form>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
});

