import {
  Avatar,
  Card,
  IconButton,
  Box,
  Button,
  Stack,
  Typography,
} from '@mui/material';
import BackGroundSide from '../components/BackGroundSide';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from 'react-router-dom';
import uniquid from 'uniquid';
import { useFirestore } from '../hooks/useFirestore';
import { useAuthContext } from '../hooks/useAuthContext';
import { timestamp } from '../config/firebase';
import useDocuments from '../hooks/useDocuments';
import './activity-card.css';
import theme from '../theme';

const ActivityCard = ({ activity }) => {
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { title, description, contact, id } = activity;
  const { updateDocument } = useFirestore('users');
  const { document } = useDocuments('users', user.uid);

  const activityToupdate = {
    activity: id,
    title,
    id: uniquid(),
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
        minWidth: '300px',
        borderRadius: theme.shape.borderRadius,
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0px 0.916602px 3.816602px rgba(0, 0, 0, 0.16)',
        height: '93%',
        pl: 0,
        [theme.breakpoints.up('sm')]: {
          minWidth: '300px',
        },
      }}
    >
      <Card
        sx={{
          border: `1.3px solid #030109`,
          height: '100%',
          pl: 10,
        }}
      >
        <Stack spacing={{ xs: 1, sm: 3, md: 4 }} p="5px 14px">
          <Typography
            className="cutoff-text-title"
            variant="h6"
            color="textColor.main"
            sx={{ fontWeight: '600', width: '85%', fontSize: '18px' }}
          >
            {title}
          </Typography>
          <IconButton
            aria-label="add to favorites"
            sx={{
              color: 'logoColor.dark',
              position: 'absolute',
              top: 3,
              right: 3,
              '&:hover': {
                color: 'logoColor.main',
                backgroundColor: 'logoColor.light',
              },
            }}
            onClick={() => handleClick()}
          >
            <FavoriteBorderIcon />
          </IconButton>
          <Typography
            className="cutoff-text"
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Stack direction="row" spacing={1.5}>
              <Avatar
                sx={{ bgcolor: '#ffab3d', width: 18, height: 18, ml: 1.5 }}
                aria-label="activity"
                alt={contact}
                src=""
              >
                S
              </Avatar>
              <Typography variant="caption" color="logoColor.dark">
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
        </Stack>
      </Card>
      <BackGroundSide />
    </Box>
  );
};

export default ActivityCard;
