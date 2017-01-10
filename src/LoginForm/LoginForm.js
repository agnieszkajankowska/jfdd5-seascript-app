import React from 'react'
import { connect } from 'react-redux'
import {
  Button, Modal, Form, FormGroup,
  ControlLabel, FormControl, Col, Checkbox
} from 'react-bootstrap'


const mapStateToProps = state => ({
  loggedInUser: state.loggedInUserData.loggedInUser
})


class LoginForm extends React.Component {
  constructor() {
    super()

    this.state = {
      users: null,
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

        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={this.open}
        >
          LOG IN
        </Button>

        <Modal show={this.state.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>xxx</Modal.Title>
          </Modal.Header>
          <Modal.Body>


            <h4>Log in</h4>

            <Form horizontal>
              <FormGroup controlId="formHorizontalEmail">
                <Col componentClass={ControlLabel} sm={2}>
                  Name
                </Col>
                <Col sm={10}>
                  <FormControl type="name" placeholder="Name"/>
                </Col>
              </FormGroup>

              <FormGroup controlId="formHorizontalPassword">
                <Col componentClass={ControlLabel} sm={2}>
                  Password
                </Col>
                <Col sm={10}>
                  <FormControl type="surname" placeholder="Surname"/>
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
                    LOG IN
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
    )
  }
}

export default connect(mapStateToProps)(LoginForm)
