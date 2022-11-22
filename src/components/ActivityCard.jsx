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
import { useNavigate } from 'react-router-dom';

const ActivityCard = ({ activity }) => {
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
          title={activity.title}
          titleTypographyProps={{ variant: 'body1' }}
          sx={{ pb: 0.6 }}
        />
        <CardContent sx={{ pt: 0, width: '200px' }}>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 0 }}>
            {activity.description.slice(0, 40)}
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ py: 0, pl: 2.5 }}>
          <Stack direction="row" spacing={1}>
            <Avatar
              sx={{ bgcolor: '#ffab3d', width: 18, height: 18 }}
              aria-label="activity"
              alt={activity.contact}
              src=""
            >
              S
            </Avatar>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: '13px', fontSize: '12px' }}
            >
              Added by: {activity.contact}
            </Typography>
            <Button
              sx={{
                height: '23px',
                color: '#fff',
                backgroundColor: '#988fad',
                '&:hover': { backgroundColor: '#625b71' },
              }}
              onClick={() => navigate(`{/activity-detail/${activity.id}}`)}
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
            '&:hover': { color: '#988fad', fill: 'blue' },
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
