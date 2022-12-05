import { Card, Link, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
// import { Link as RouterLink } from 'react-router-dom'

export default function ActivityCardMini({ activity }) {
  return (
    <Link underline="none" to={`/activity/${activity.id}`}>
      <Card
        sx={{
          m: 1,
          py: 1,
          px: 3,
        }}
      >
        <Typography variant="body1" color="logoColor.dark" sx={{ fontWeight: 700 }}>
          {format(parseISO(activity.date), 'MMM dd')}
        </Typography>
        <Typography color="primary.dark">{activity.title}</Typography>
      </Card>
    </Link>
  );
}
