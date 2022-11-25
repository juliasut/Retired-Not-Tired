import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import PageTitleTypography from '../../components/PageTitleTypography';
import { Container } from '@mui/system';
import BadgeAvatar from '../../components/BadgeAvatar';

export default function Messages() {
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{ minHeight: '100vh', paddingBottom: '60px' }}
    >
      <PageTitleTypography>Messages</PageTitleTypography>
      <List sx={{ width: '100%', maxWidth: 480, bgcolor: 'background.paper' }}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="" sx={{ bgcolor: '#ffab3d' }}>
              A
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Brunch this weekend?"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Ali Connors
                </Typography>
                {" — I'll be in your neighborhood doing errands this…"}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <BadgeAvatar
              avatar={
                <Avatar
                  alt="Travis Howard"
                  src=""
                  sx={{ bgcolor: 'primary.light' }}
                >
                  R
                </Avatar>
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary="Summer BBQ"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  to Scott, Alex, Jennifer
                </Typography>
                {" — Wish I could come, but I'm out of town this…"}
              </>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <BadgeAvatar
              avatar={
                <Avatar
                  alt="Cindy Baker"
                  src=""
                  sx={{ bgcolor: 'primary.dark' }}
                >
                  S
                </Avatar>
              }
            />
          </ListItemAvatar>
          <ListItemText
            primary="Oui Oui"
            secondary={
              <>
                <Typography
                  sx={{ display: 'inline' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  Sandra Adams
                </Typography>
                {' — Do you have Paris recommendations? Have you ever…'}
              </>
            }
          />
        </ListItem>
      </List>
    </Container>
  );
}
