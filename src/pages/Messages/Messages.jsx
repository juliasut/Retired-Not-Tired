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
            <Avatar
              alt="Iuliia"
              src="https://firebasestorage.googleapis.com/v0/b/retired-not-tired.appspot.com/o/thumbnails%2F6NPsoK6axgSGN3FX85854gKnnLt2%2FoldIuliia.png?alt=media&token=2ea1b96a-e0a4-4cac-bc1e-593f68b2fefd"
              sx={{ bgcolor: '#ffab3d' }}
            >
              I
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
                  Iuliia
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
                  alt="Tami"
                  src="https://firebasestorage.googleapis.com/v0/b/retired-not-tired.appspot.com/o/thumbnails%2FLuCgejR0uVRXPTCZOKmuM8tfQri2%2FoldTami.png?alt=media&token=bf00523e-abb6-45ff-978c-96234a5d9b55"
                  sx={{ bgcolor: 'primary.light' }}
                >
                  T
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
                  to Tami, Alex, Jennifer
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
                  alt="Dan"
                  src="https://firebasestorage.googleapis.com/v0/b/retired-not-tired.appspot.com/o/thumbnails%2FFHHXACai7Zgqh3vTMz63rzgayvR2%2FoldDan.png?alt=media&token=79aab69e-63af-443a-8082-659c75bf5d8d"
                  sx={{ bgcolor: 'primary.dark' }}
                >
                  D
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
                  Dan
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
