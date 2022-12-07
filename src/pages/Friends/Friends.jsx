import { Container, Typography } from '@mui/material';
import { useCollection } from '../../hooks/useCollection';
import PageTitleTypography from '../../components/PageTitleTypography';
import { Box, Stack, Avatar, Card } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import BadgeAvatar from '../../components/BadgeAvatar';

const Friends = () => {
  const { documents, error } = useCollection('users');

  console.log(documents);

  return (
    <Container maxWidth="sm" sx={{ p: '20px', pb: 15, height: '100%' }}>
      <PageTitleTypography>Friends Page</PageTitleTypography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          maxWidth: '350px',
          justifyContent: 'flex-end',
          mt: 7,
        }}
      >
        <Typography gutterBottom>Add new friend</Typography>
        <PersonAddAltOutlinedIcon />
      </Stack>
      {error && <p>{error}</p>}
      {documents &&
        documents.map((doc) => (
          <Card
            key={doc.id}
            sx={{
              my: 2,
              p: 3,
              maxWidth: 350,
              height: 160,
              background: 'linear-gradient(90deg, #f6f6f6 75%, #988FAD 25%)',
            }}
          >
            <Stack direction="row" spacing={1} sx={{ height: '100%' }}>
              <Box sx={{ width: '60%' }}>
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: 'textColor.main' }}
                >
                  {doc.name || 'avatar'}
                </Typography>
                <Typography sx={{ color: 'primary.main' }} gutterBottom>
                  {doc.displayName || 'username'}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <StarBorderOutlinedIcon
                    sx={{
                      color: 'logoColor.main',
                      height: 30,
                    }}
                  />
                  <Typography
                    variant="body2"
                    component="p"
                    width="80%"
                    color="text.secondary"
                  >
                    Interests:{' '}
                    {doc.activities.length === 0 ? (
                      <>
                        {' '}
                        <br />
                        Coming soon...
                      </>
                    ) : (
                      doc.activities
                        ?.slice(0, 3)
                        .map((interest) => (
                          <span key={interest.id}>{interest.title} | </span>
                        ))
                    )}
                  </Typography>
                </Stack>
              </Box>
              {!document.online ? (
                <BadgeAvatar
                  avatar={
                    <Avatar
                      alt={doc.displayName || 'avatar'}
                      src={doc.photoURL}
                      sx={{
                        height: '105px',
                        width: '105px',
                        background:
                          'linear-gradient(to right bottom, #988FAD, #FEF2D8)',
                        transform: 'translate(4%, 20%)',
                      }}
                    ></Avatar>
                  }
                />
              ) : (
                <Avatar
                  alt={doc.name || 'avatar'}
                  src={doc.photoURL}
                  sx={{
                    height: '100px',
                    width: '100px',
                    background:
                      'linear-gradient(to right bottom, #988FAD, #FEF2D8)',
                    alignSelf: 'center',
                  }}
                ></Avatar>
              )}
              <MoreVertIcon sx={{ color: 'primary.dark' }} />
            </Stack>
          </Card>
        ))}
    </Container>
  );
};

export default Friends;
