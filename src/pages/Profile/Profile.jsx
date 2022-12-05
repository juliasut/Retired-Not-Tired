import { useDocuments } from '../../hooks/useDocuments';
import { useCollection } from '../../hooks/useCollection';
import ActivitiesList from '../../components/ActivitiesList';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import Container from '@mui/material/Container';
import PageTitleTypography from '../../components/PageTitleTypography';
import { Button, Avatar, Stack, Typography } from '@mui/material';
import BadgeAvatar from '../../components/BadgeAvatar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import EmailIcon from '@mui/icons-material/Email';

const Profile = () => {
  const { user } = useAuthContext();
  // eslint-disable-next-line no-unused-vars
  const { document, error } = useDocuments('users', user.uid);
  // eslint-disable-next-line no-unused-vars
  const { documents, err } = useCollection('activities');
  const navigate = useNavigate();

  const ProfileAvatar = () => {
    return (
      <Avatar
        alt={document.name || 'avatar'}
        src={document.photoURL || 'https://via.placeholder.com/150'}
        sx={{
          height: '100px',
          width: '100px',
          backgroundColor: 'primary.light',
        }}
      ></Avatar>
    );
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ minHeight: '100vh', p: '20px 20px 60px' }}
    >
      {document && (
        <>
          <PageTitleTypography>
            Profile <br />
            {document.name}
          </PageTitleTypography>
          <Stack gap={4} mt={5}>
            <Stack direction="row" gap={8}>
              {document.online ? (
                <BadgeAvatar avatar={<ProfileAvatar />} />
              ) : (
                <ProfileAvatar />
              )}

              <Stack gap={2.5}>
                <Stack direction="row" gap={1}>
                  <CalendarTodayOutlinedIcon
                    sx={{ color: 'text.secondary', height: '20px' }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 400, lineHeight: '18px' }}
                  >
                    {' '}
                    Member since 2020
                  </Typography>
                </Stack>
                <Stack direction="row" gap={1}>
                  <LanguageOutlinedIcon
                    sx={{ color: 'text.secondary', height: '20px' }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 400, lineHeight: '18px' }}
                  >
                    3 organized activities
                  </Typography>
                </Stack>
                <Stack direction="row" gap={1}>
                  <LocationOnOutlinedIcon
                    sx={{ color: 'text.secondary', height: '20px' }}
                  />
                  <Typography
                    variant="body2"
                    sx={{ fontWeight: 400, lineHeight: '18px' }}
                  >
                    {document.city}, {document.state}
                  </Typography>
                </Stack>
                <Typography variant="caption" sx={{ alignSelf: 'flex-end' }}>
                  Active 1 minute ago
                </Typography>
              </Stack>
            </Stack>

            <Typography variant="body1" gutterBottom>
              {document.bio}... <b>Read more</b>
            </Typography>
            <Typography
              variant="body1"
              fontWeight="700"
              color="primary.dark"
              sx={{ fontSize: '18px' }}
            >
              Activities I've organized
            </Typography>
            <ActivitiesList activities={documents.slice(0, 3)} color='#988FAD'/>
            <Typography
              variant="body1"
              fontWeight="700"
              color="primary.dark"
              sx={{ fontSize: '18px' }}
            >
              Activities I'm interested in 🤌 :{' '}
            </Typography>
            <Stack direction="row" sx={{ flexWrap: 'wrap', gap: 3 }}>
              {document.activities.map((interest) => (
                <Button
                  variant="contained"
                  sx={{
                    height: '25px',
                    fontSize: '11px',
                    borderRadius: '50px',
                  }}
                  key={interest.id}
                  onClick={() =>
                    navigate(`/activity-detail/${interest.activity}`)
                  }
                >
                  {interest.title}
                </Button>
              ))}
            </Stack>
            <Typography
              variant="body1"
              fontWeight="700"
              color="primary.dark"
              sx={{ fontSize: '18px' }}
            >
              Active member
            </Typography>

            <Typography>
              <CheckOutlinedIcon
                sx={{ height: '25px', position: 'relative', bottom: -5 }}
              />{' '}
              {document.name.split(' ')[0]} has attended <b>14</b> activities.
            </Typography>
            <Button
              variant="outlined"
              startIcon={<EmailIcon />}
              sx={{
                borderWidth: '1.5px',
                fontSize: '16px',
                fontWeight: '600',
                mt: '20px',
              }}
            >
              Message
            </Button>
          </Stack>
        </>
      )}
    </Container>
  );
};

export default Profile;
