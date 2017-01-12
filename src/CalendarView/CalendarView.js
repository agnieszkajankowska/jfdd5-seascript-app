import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import {connect} from "react-redux";

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

moment.locale("en");

const mapStateToProps = (props) => {

}

const CalendarView = (props) => (
  <div style={{height: 300}}>
    <BigCalendar
      events={[
        {
          allDay: true,
          start: new Date(),
          end: new Date()
        }
      ]}
      startAccessor='startDate'
      endAccessor='endDate'
      step={15}
      timeslots={8}

      defaultView="week"
      defaultDate={new Date()}
    />
  </div>
);

export default connect(mapStateToProps)(CalendarView)