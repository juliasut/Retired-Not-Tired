import './home.css';
import Logo from '../../assets/images/retired-not-tired-just-flip-flops.png';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import AddActivity from '../../components/AddActivity';
import ActivityCardMini from '../../components/ActivityCardMini';
import { useDocuments } from '../../hooks/useDocuments';
import { useCollection } from '../../hooks/useCollection';
import CustomCalendar from '../../components/CustomCalendar';
import CalendarColorMap from '../../components/CalendarColorMap';
import Container from '@mui/material/Container';

function Home({ user }) {
  const { document: currentUser } = useDocuments('users', user.uid);
  const { documents: allActivities } = useCollection('activities');
  const currentUserActivities = currentUser?.activitiesIds.map((id) =>
    allActivities.find((a) => a.id === id)
  );
  // eslint-disable-next-line no-unused-vars
  const [scheduledDays, setScheduledDays] = useState([10, 11, 20, 27]);
  // eslint-disable-next-line no-unused-vars
  const [interestedInDays, setInterestedInDays] = useState([16, 31]);


  return (
    <Container
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 0',
      }}
    >
      <Typography
        variant="body1"
        align="center"
        sx={{ fontStyle: 'italic',  }}
      >
        Stay Active
      </Typography>

      <Typography
        variant="h4"
        component="h1"
        align="center"
        color="textColor.main"
        gutterBottom
        sx={{ fontWeight: 700 }}
      >
        Retired Not
        <br /> Tired
      </Typography>
      <img className="logo" src={Logo} alt="Retirement flip flop" />
      <Typography
        variant="h6"
        sx={{ fontWeight: 700, fontSize: '18px', mt: 4 }}
        gutterBottom
      >
        Upcoming Activities:
      </Typography>
      <div className="scroller">
        {currentUserActivities
          ?.sort(
            (d1, d2) =>
              new Date(d1.date).getTime() - new Date(d2.date).getTime()
          )
          .map((activity) => (
            <ActivityCardMini key={activity.id} activity={activity} />
          ))}
      </div>

      <CustomCalendar
        scheduledDays={scheduledDays}
        interestedInDays={interestedInDays}
      />
      <CalendarColorMap />
      <AddActivity />
    </Container>
  );
}

export default Home;
