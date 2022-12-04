/* eslint-disable react-hooks/exhaustive-deps */
import './home.css';
import 'react-calendar/dist/Calendar.css';
import Logo from '../../assets/images/retired-not-tired-just-flip-flops.png';
import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useState } from 'react';
import AddActivity from '../../components/AddActivity';
import ActivityCardMini from '../../components/ActivityCardMini';
import { useDocuments } from '../../hooks/useDocuments';
import { useCollection } from '../../hooks/useCollection';
import { CalendarPicker, PickersDay } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

function Home({ user }) {
  const { document: currentUser } = useDocuments('users', user.uid);
  const { documents: allActivities } = useCollection('activities');
  const currentUserActivities = currentUser?.activitiesIds.map((id) =>
    allActivities.find((a) => a.id === id)
  );
  const [date, setDate] = useState(dayjs());
  const dateArray = [10, 11, 20, 27];

  return (
    <div className="container">
      <Typography
        variant="h5"
        component="h3"
        align="center"
        gutterBottom
        sx={{ fontStyle: 'italic' }}
      >
        Stay Active
      </Typography>

      <Typography
        variant="h4"
        component="h1"
        align="center"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Retired Not
        <br /> Tired
      </Typography>
      <img className="logo" src={Logo} alt="Retirement flip flop" />
      <Typography variant="h6" component="h2" align="center" >
        Activites on your schedule:
      </Typography>
      <div className="media-scroller">
        {currentUserActivities
          ?.sort(
            (d1, d2) =>
              new Date(d1.date).getTime() - new Date(d2.date).getTime()
          )
          .map((activity) => (
            <ActivityCardMini key={activity.id} activity={activity} />
          ))}
      </div>
      <Typography variant="h6" sx={{ fontWeight: 700 }}>
        Upcoming Activities
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <CalendarPicker
          value={date}
          variant="static"
          onChange={(newValue) => {
            setDate(newValue);
          }}
          renderDay={(day, selectedDays, pickersDayProps) => {
            let selectedMuiClass = '';

            if (dateArray.includes(day.$D)) {
              selectedMuiClass = 'selected';
            }

            return (
              <PickersDay className={selectedMuiClass} {...pickersDayProps} />
            );
          }}
        />
      </LocalizationProvider>
      <AddActivity />
    </div>
  );
}

export default Home;
