import { Box, Button, CardMedia, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';

const Error = () => {
  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h2"
          component="h1"
          sx={{ mb: 3, fontWeight: 500 }}
          color="#625b71"
        >
          404
        </Typography>
        <Typography variant="h6" component="h2" align="center" gutterBottom>
          That page does not seem to exist Tami...
        </Typography>
        <CardMedia
          component="iframe"
          src="https://giphy.com/embed/l2JehQ2GitHGdVG9y"
          height="300px"
          frameBorder="0"
          allowFullScreen
        ></CardMedia>
        <Link href="/" underline="none">
          <Button
            variant="contained"
            component="Link"
            disableElevation={true}
            sx={{
              mt: 2,
              mb: 2,
              width: 140,
              backgroundColor: '#625b71',
              '&:hover': {
                backgroundColor: '#988fad',
              },
            }}
          >
            Go home
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Error;
