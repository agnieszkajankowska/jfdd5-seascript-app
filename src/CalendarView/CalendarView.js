import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import {connect} from "react-redux";
import {Grid, Row, Col} from "react-bootstrap";


BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

moment.locale("en");

const mapStateToProps = state => ({
  reservations: state.makeReservationData.reservations,
})


const CalendarView = (props) => {
console.log(props.reservations)
  return (
    <Grid>
      <Row>
        <Col xs={4}>
          <div className="PlaceListItemIcon">
            {props.reservations.length > 0 ? <img src={process.env.PUBLIC_URL + '/images/icons/attractions/' + props.reservations[0].attractionImage } role="presentation" /> : null }
            <p></p>
          </div>
        </Col>
        <Col xs={8}>
          <div style={{height: 300}}>
            <p>{props.reservationsPlace}</p>
            <BigCalendar
              events={props.reservations.map(reservation => ({
                  title: reservation.place + ' ' + reservation.attractionName,
                  allDay: true,
                  start: new Date(reservation.startDate),
                  end: new Date(reservation.endDate),
                })
              )}

              step={15}
              timeslots={8}

              defaultView="week"
              defaultDate={new Date()}
            />
          </div>
        </Col>
      </Row>
    </Grid>

  );
}

export default connect(mapStateToProps)(CalendarView)