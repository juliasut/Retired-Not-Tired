import './custom-calendar.css'
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import { CalendarPicker, PickersDay } from '@mui/x-date-pickers';

export default function CustomCalendar({ scheduledDays, interestedInDays }) {
  const [date, setDate] = useState(dayjs());

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <CalendarPicker
        value={date}
        views={['day']}
        variant="static"
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderDay={(day, selectedDays, DayComponentProps) => {
          const isGoing =
            !DayComponentProps.outsideCurrentMonth &&
            scheduledDays.includes(day.date());
          const isInterested =
            !DayComponentProps.outsideCurrentMonth &&
            interestedInDays.includes(day.date());

          const goingHighlight = { background: '#625B75', color: 'white' };
          const interestedHighlight = { background: '#e5def6' };

          return (
            <PickersDay
              sx={
                isGoing
                  ? goingHighlight
                  : isInterested
                  ? interestedHighlight
                  : {}
              }
              {...DayComponentProps}
            />
          );
        }}
      />
    </LocalizationProvider>
  );
}
