import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import {connect} from "react-redux";
import {fetchReservations} from '../state/reservation/fetchReservations'
import {Grid, Row, Col} from "react-bootstrap";

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

moment.locale("en");

const mapStateToProps = state => ({
  reservations: state.makeReservationData.reservations,
  session: state.logInStatusData.session
})

const mapDispatchToProps = dispatch => ({
  fetchReservations: (userId, token) => dispatch(fetchReservations(userId, token))
})

class CalendarView extends React.Component {

  componentWillMount() {
    this.props.session !== null ?
      this.props.fetchReservations(this.props.session.userId, this.props.session.id) : ''
  }

  render() {
    return (
      <Grid>
        <Row>
          <Col xs={4}>
            <div className="PlaceListItemIcon">
                <p>{this.props.reservations.map(placeInformation => (
                        placeInformation.details.place + ' ' + placeInformation.details.attractionName
                    )
                )}
                </p>
                <p>{this.props.reservations.map(information => (
                        'from: ' + information.details.startDate + ' to: ' + information.details.endDate
                    )
                )}
                </p>
              {this.props.reservations.length > 0 ? <img src={process.env.PUBLIC_URL + '/images/icons/attractions/'
              + this.props.reservations[0].details.attractionImage } role="presentation" /> : null }
            </div>
          </Col>
          <Col xs={7}>
            <div style={{height: 450}}>
              <h1>Your reservations calendar</h1>
        <BigCalendar
          events={this.props.reservations.map(reservation => ({
              title: reservation.details.place + ' ' + reservation.details.attractionName,
              allDay: true,
              start: new Date(reservation.details.startDate),
              end: new Date(reservation.details.endDate),
            })
          )}

          step={15}
          timeslots={8}
          defaultView="month"
          defaultDate={new Date()}
        />
      </div>
            </Col>
          </Row>
        </Grid>

    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarView)

