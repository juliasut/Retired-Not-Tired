/* eslint-disable react-hooks/exhaustive-deps */
import Activities from '../Activities/Activities';
import CreateActivity from '../CreateActivity/CreateActivity';
import './home.css';
import 'react-calendar/dist/Calendar.css';
// import Calendar from "react-calendar";
// import CalendarPicker from "@mui/x-date-pickers-pro/CalendarPicker";
import Logo from '../../assets/images/retired-not-tired-just-flip-flops.png';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import StaticDatePickerLandscape from '../../components/Calendar';
import Button from '../../components/Button';
// import Icon from "@mui/material/Icon;

import { useEffect, useState } from 'react';

function Home() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/activities')
      .then((response) => response.json())
      .then((json) => setDetails(json));
  }, []);
  console.log(details);

  // const dummyActivities = [
  //   { id: 1, title: "swimming", date: new Date() },
  //   { id: 2, title: "golf", date: new Date() },
  //   { id: 3, title: "bingo", date: new Date() },
  //   { id: 4, title: "boxing", date: new Date() },
  // ];
  // pass in db.json here, the pass it into props in the detailed activey page
  return (
    <div className="container">
      <Typography variant="h4" component="h3" align="center" gutterBottom>
        Stay Active
      </Typography>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Retrired Not Tired
      </Typography>
      <img className="logo" src={Logo} alt="Retirement flip flop" />
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        Activites on your schedule:
      </Typography>
      <div className="activity-containter">
        {details.map((activity) => (
          <Link to={`/activity/${activity.id}`}>
            <Card
              sx={{
                display: 'inline-block',
                mx: '2px',
                transform: 'scale(0.8)',
              }}
              key={activity.id}
            >
              <p>{activity.title}</p>
              <p>{format(activity.date, 'MM-dd-yyyy')}</p>
            </Card>
          </Link>
        ))}
      </div>

      <Activities />
      <Link to="/create-activity" element={<CreateActivity />}>
        <button className="create-activity">Create Activity</button>
      </Link>

      <StaticDatePickerLandscape />
      <Button />
    </div>
  );
}

export default Home;
