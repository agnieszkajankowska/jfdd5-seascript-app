import React from "react";
import {connect} from "react-redux";
import {Button, Form, FormGroup, ControlLabel, FormControl, Col, Checkbox} from "react-bootstrap";


const mapStateToProps = state => ({
 //wrzucić wybrane atrakcje i miejsce
})

const mapDispatchToProps = dispatch => ({
  makeReservation: (formState) => dispatch({type: 'reservation/MAKE_RESERVATION', formState: formState})
})


class ReservationView extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      surname: '',
      email: '',
      date: ''
    }

  }

  render() {
    return (
    <Form horizontal onSubmit={(event) => {
      event.preventDefault()
      this.props.makeReservation({
        ...this.state,
        //dodać te wybrane atrakcje i miejsca
      })
    }}>
      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Name
        </Col>
        <Col sm={10}>
          <FormControl type="name" placeholder="Name" value={this.state.name}
                       onChange={(event) => this.setState({name: event.target.value})}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalPassword">
        <Col componentClass={ControlLabel} sm={2}>
          Surname
        </Col>
        <Col sm={10}>
          <FormControl type="surname" placeholder="Surname" value={this.state.surname}
                       onChange={(event) => this.setState({surname: event.target.value})}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Email
        </Col>
        <Col sm={10}>
          <FormControl type="email" placeholder="Email" value={this.state.email}
                       onChange={(event) => this.setState({email: event.target.value})}/>
        </Col>
      </FormGroup>

      <FormGroup controlId="formHorizontalEmail">
        <Col componentClass={ControlLabel} sm={2}>
          Date
        </Col>
        <Col sm={10}>
          <FormControl type="date" placeholder="Date" value={this.state.date}
                       onChange={(event) => this.setState({date: event.target.value})}/>
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
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (ReservationView)