import React from "react";
import BigCalendar from "react-big-calendar";
import moment from "moment";

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

moment.locale("pl");

const CalendarView = (props) => (
  <div>
    <BigCalendar
      events={[
        {
          allDay: true,
          start: new Date(),
          end: new Date(),
          title: "Ostatni dzień."
        }
      ]}
      startAccessor='startDate'
      endAccessor='endDate'

      defaultView="week"
      defaultDate={new Date()}
    />
  </div>
);

export default CalendarView