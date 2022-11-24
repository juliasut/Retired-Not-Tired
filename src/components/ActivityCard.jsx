import {
  Avatar,
  Card,
  CardHeader,
  IconButton,
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import BackGroundSide from '../components/BackGroundSide';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import uniqid from 'uniqid';
import { useFirestore } from '../hooks/useFirestore';
import { useAuthContext } from '../hooks/useAuthContext';
import { timestamp } from '../config/firebase';
import useDocuments from '../hooks/useDocuments';

const ActivityCard = ({ activity }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { title, description, contact, id } = activity;
  const { updateDocument } = useFirestore('users');
  const { document } = useDocuments('users', user.uid);

  const activityToupdate = {
    activity: id,
    title,
    id: uniqid(),
    dateAdded: timestamp.fromDate(new Date()),
  };

  const handleClick = () => {
    //? if the activity already exists, then it should not be added again
    if (
      !document.activities.some((userAct) => {
        //todo toast notification here
        console.log('Activity Already Added to your list');
        return userAct.activity === id;
      })
    ) {
      //? if the activity is not in the users saved activities then add it
      //todo toast notification here
      console.log('Activity Added to your list');
      updateDocument(user.uid, {
        activities: [...document.activities, activityToupdate],
      });
    }
  };

  return (
    <Box
      sx={{
        width: '95%',
        maxWidth: '420px',
        height: '100%',
        maxHeight: '150px',
        borderRadius: '6.7px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0px 0.916602px 3.816602px rgba(0, 0, 0, 0.16)',
        my: 2.5,
      }}
    >
      <Card
        sx={{
          border: '1.3px solid #030109',
          height: '100%',
          width: '100%',
          paddingLeft: '38px',
        }}
      >
        <CardHeader
          title={title}
          titleTypographyProps={{ variant: 'body1', color: 'textColor.main' }}
          sx={{ pb: 0.6 }}
        />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ width: '70%', mx: '9%', mb: '5px' }}
        >
          {description.slice(0, 57)}
        </Typography>
        <Stack
          direction="row"
          spacing={0.7}
          justifyContent="space-between"
          width="85%"
          mx="10%"
        >
          <Stack direction="row" spacing={1.5}>
            <Avatar
              sx={{ bgcolor: '#ffab3d', width: 18, height: 18 }}
              aria-label="activity"
              alt={contact}
              src=""
            >
              S
            </Avatar>
            <Typography variant="caption" color="textColor.misc">
              Added by: {contact}
            </Typography>
          </Stack>
          <Button
            variant="contained"
            size="small"
            sx={{ height: '25px' }}
            onClick={() => navigate(`/activity-detail/${id}`)}
          >
            <Typography sx={{ fontSize: '11px', textTransform: 'none' }}>
              More Info
            </Typography>
          </Button>
        </Stack>
        <IconButton
          aria-label="add to favorites"
          sx={{
            position: 'absolute',
            top: 9,
            right: 8,
            '&:hover': { color: '#988fad', fill: 'blue' },
          }}
          onClick={() => handleClick()}
        >
          <FavoriteBorderIcon />
        </IconButton>
      </Card>
      <BackGroundSide />
    </Box>
  );
};

export default ActivityCard;
