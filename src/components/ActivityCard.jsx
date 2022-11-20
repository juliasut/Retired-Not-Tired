import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Box,
  Stack,
} from '@mui/material';
import BackGroundSide from '../components/BackGroundSide';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import Button from '../components/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ActivityCard = (props) => {
  const activity = {
    id: '1',
    name: 'Dancing to the Oldies',
    location: {
      street: '123 Main st',
      city: 'San Jose',
      state: 'California',
      'zip code': 95110,
    },
    date: '12.14.2022',
    time: '17:00',
    organizer: 'Spencer Rees',
    'contact-number': '301- 555-1212',
    description: "Let's dance together as the beat drops high",
  };

  return (
    <Box
      sx={{
        width: '285px',
        height: '145px',
        borderRadius: '6.7px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0px 0.916602px 3.816602px rgba(0, 0, 0, 0.16)',
      }}
    >
      <Card
        sx={{
          border: '1.3px solid #030109',
          height: '100%',
          width: '100%',
          borderRadius: '6.7px',
          paddingLeft: '38px',
        }}
      >
        <CardHeader
          title={activity.name}
          titleTypographyProps={{ variant: 'body1' }}
          sx={{ pb: 0.6 }}
        />
        <CardContent sx={{ pt: 0, width: '200px' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0 }}>
            {activity.description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ py: 0, pl: 2.5 }}>
          <Stack direction="row" spacing={1}>
            <Avatar
              sx={{ bgcolor: '#ffab3d', width: 18, height: 18 }}
              aria-label="activity"
              alt={activity.organizer}
              src=""
            >
              S
            </Avatar>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: '13px', fontSize: '12px' }}
            >
              Added by: {activity.organizer}
            </Typography>
            <Button
              size="small"
              sx={{
                height: '30px',
                backgroundColor: '#988fad',
                '&:hover': { backgroundColor: '#624b71' },
              }}
            >
              <Typography sx={{ fontSize: '10px', textTransform: 'none' }}>
                More Info
              </Typography>
            </Button>
          </Stack>
        </CardActions>
        <IconButton
          aria-label="add to favorites"
          sx={{
            position: 'absolute',
            top: 9,
            right: 8,
            '&:hover': { color: '#988fad', fill: 'blue',  },
          }}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Card>
      <BackGroundSide />
    </Box>
  );
};

export default ActivityCard;
