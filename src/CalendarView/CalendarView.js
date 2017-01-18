import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import {connect} from "react-redux";

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

moment.locale("en");

const mapStateToProps = state => ({
reservations: state.makeReservationData.reservations
})


const CalendarView = (props) => {
  
  return (
    <div style={{height: 300}}>
      <BigCalendar
        events={props.reservations.map( reservation => ({
            title: reservation.name,
            allDay: true,
            start: new Date(reservation.date),
            end: new Date(reservation.date),
          })
        )}

        step={15}
        timeslots={8}

        defaultView="week"
        defaultDate={new Date()}
      />
    </div>

  );
}

export default connect(mapStateToProps)(CalendarView)