import { Container, Typography } from '@mui/material';
import { useCollection } from '../../hooks/useCollection';
import { useDocuments } from '../../hooks/useDocuments';
import PageTitleTypography from '../../components/PageTitleTypography';
import { Box, Stack, Avatar, Card, Divider } from '@mui/material';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import BadgeAvatar from '../../components/BadgeAvatar';

const Friends = () => {
  const { documents, error } = useCollection('users');

  console.log(documents);

  return (
    <Container maxWidth="sm" sx={{ p: '20px' }}>
      <PageTitleTypography>Friends Page</PageTitleTypography>
      <Stack
        direction="row"
        spacing={2}
        sx={{
          width: '100%',
          display: 'flex',
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
              my: 6,
              p: 3,
              maxWidth: '350px',
              background: 'linear-gradient(90deg, #f6f6f6 75%, #988FAD 25%)',
            }}
          >
            <Stack direction="row" spacing={1}>
              <Box
                sx={{ width: '60%' }}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: 600, color: 'textColor.main' }}
                >
                  {doc.name || 'avatar'}
                </Typography>

                <Divider
                  orientation="vertical"
                  variant="middle"
                  flexItem
                  sx={{ backgroundColor: 'red' }}
                />
                <Typography sx={{ color: 'primary.main' }} gutterBottom>
                  {doc.displayName || 'username'}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <StarBorderOutlinedIcon
                    sx={{
                      color: 'logoColor.main',
                      height: '40px',
                    }}
                  />
                  <Typography
                    variant="body2"
                    component="p"
                    width="70%"
                    color="text.secondary"
                  >
                    Interests:
                    {doc.activities?.map((interest) => (
                      <li key={interest.id} style={{ listStyle: 'none' }}>
                        {interest.title.substring(0, 14)}...
                      </li>
                    ))}
                  </Typography>
                </Stack>
              </Box>
              {document.online ? (
                <BadgeAvatar
                  avatar={
                    <Avatar
                      alt={doc.displayName || 'avatar'}
                      src={doc.photoURL}
                      sx={{
                        height: '100px',
                        width: '100px',
                        backgroundColor: 'primary.light',
                      }}
                    ></Avatar>
                  }
                />
              ) : (
                <BadgeAvatar
                  avatar={
                    <Avatar
                      alt={doc.name || 'avatar'}
                      src={doc.photoURL}
                      sx={{
                        height: '100px',
                        width: '100px',
                        backgroundColor: 'primary.light',
                      }}
                    ></Avatar>
                  }
                />
              )}
              <MoreVertIcon sx={{ color: 'primary.dark' }} />
            </Stack>
          </Card>
        ))}
    </Container>
  );
};

export default Friends;
