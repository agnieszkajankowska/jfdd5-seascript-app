import BigCalendar from "react-big-calendar";
import moment from "moment";

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

moment.locale("pl");

const Calendar = props => (
  <div>
    <BigCalendar
      events={AttractionList}
      startAccessor='startDate'
      endAccessor='endDate'
      />
  </div>
);

export default Calendar