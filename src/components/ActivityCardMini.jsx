import { Card, Link, Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';
// import { Link as RouterLink } from 'react-router-dom'

export default function ActivityCardMini({ activity }) {
  return (
    <Link underline="none" to={`/activity/${activity.id}`}>
      <Card
        sx={{
          my: 3,
          py: 2,
          px: 4,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {format(parseISO(activity.date), 'MMM dd')}
        </Typography>
        <Typography>{activity.title}</Typography>
      </Card>
    </Link>
  );
}
