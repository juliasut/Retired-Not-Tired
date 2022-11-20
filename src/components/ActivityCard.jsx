import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import BackGroundSide from '../components/BackGroundSide';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Link, useNavigate } from 'react-router-dom';

const ActivityCard = (props) => {
  // const activity = {
    //   id: '1',
    //   title: 'Dancing to the Oldies',
    //   location: '123 Main st San Jose, California',
    //   date: '12.14.2022',
    //   time: '17:00',
    //   contact: 'Spencer Rees',
    //   'contact-number': '301- 555-1212',
    //   description: "Let's dance together as the beat drops high",
    // };
    const { title, description, contact } = props;
    const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '285px',
        height: '150px',
        borderRadius: '6.7px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0px 0.916602px 3.816602px rgba(0, 0, 0, 0.16)',
        my: 1.5,
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
          title={title}
          titleTypographyProps={{ variant: 'body1' }}
          sx={{ pb: 0.6 }}
        />
        <CardContent sx={{ pt: 0, width: '200px' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0 }}>
            {description.slice(0, 44)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ py: 0, pl: 2.5 }}>
          <Stack direction="row" spacing={1}>
            <Avatar
              sx={{ bgcolor: '#ffab3d', width: 18, height: 18 }}
              aria-label="activity"
              alt={contact}
              src=""
            >
              S
            </Avatar>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: '13px', fontSize: '12px' }}
            >
              Added by: {contact}
            </Typography>
            <Button
              sx={{
                height: '23px',
                color: '#fff',
                backgroundColor: '#988fad',
                '&:hover': { backgroundColor: '#625b71' },
              }}
              onClick={() => navigate('/activity-detail')}
            >
              <Typography sx={{ fontSize: '10px', textTransform: 'none' }}>
                More Info
              </Typography>
            </Button>
          </Stack>
        </CardActions>
        {/* <IconButton
          aria-label="add to favorites"
          sx={{
            position: 'absolute',
            top: 9,
            right: 8,
            '&:hover': { color: '#988fad', fill: 'blue' },
          }}
        >
          <FavoriteBorderIcon />
        </IconButton> */}
      </Card>
      <BackGroundSide />
    </Box>
  );
};

export default ActivityCard;
