/* eslint-disable react-hooks/exhaustive-deps */
import './home.css';
import 'react-calendar/dist/Calendar.css';
import Logo from '../../assets/images/retired-not-tired-just-flip-flops.png';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import { format, parseISO } from 'date-fns';
import { Link } from 'react-router-dom';
import StaticDatePickerLandscape from '../../components/Calendar';
import AddActivity from '../../components/AddActivity';
import { useEffect, useState } from 'react';

function Home({ user }) {
  const [details, setDetails] = useState([]);

  console.log(details);

  return (
    <div className="container">
      <Typography variant="h4" component="h3" align="center" gutterBottom>
        Stay Active
      </Typography>
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        Retired Not Tired
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
              <p>{format(parseISO(activity.date), 'MM-dd-yyyy')}</p>
            </Card>
          </Link>
        ))}
      </div>
      <StaticDatePickerLandscape />
      <AddActivity />
    </div>
  );
}

export default Home;
