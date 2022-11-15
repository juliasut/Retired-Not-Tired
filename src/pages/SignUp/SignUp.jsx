import { Grid, Box, Button, Link, Typography, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { ReactComponent as BackgroundTop } from '../../assets/rectangleTop.svg';
import { ReactComponent as BackgroundBottom } from '../../assets/rectangleBottom.svg';
import UploadButtons from '../../components/UploadButton';

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ display: 'flex', height: "100vh" }}>
        <BackgroundTop
          color="#988fad"
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: '100%',
            height: 'auto',
            maxHeight: '287px',
            zIndex: -10,
          }}
        />
        <BackgroundBottom
          color="#988fad"
          style={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            height: 'auto',
            maxHeight: '146px',
            zIndex: -10,
          }}
        />
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{alignSelf: "center"}}>
          <Typography
            component="h1"
            variant="h5"
            align="center"
            sx={{ mb: 1, fontWeight: "700" }}
            
          >
            Sign Up
          </Typography>
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="userName"
            label="Username"
            name="userName"
            autoComplete="given-name"
            autoFocus
            sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            name="password"
            label="Create password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            name="password"
            label="Confirm password"
            type="password"
            id="password"
            autoComplete="current-password"
            sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
          />
          <UploadButtons />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            marginY={2}
          >
            <Grid item xs>
              <Button
                type="submit"
                variant="contained"
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
                Sign Up
              </Button>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.primary" align="center">
                {'Already a member? '}
                <Link href="/login" variant="body2" color="text.primary">
                  {'Log In'}
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            sx={{ mt: 2, fontSize: '11px' }}
          >
            {'By logging in or signing up, you agree to Retired Not Tired '}
            <Link href="#" color="text.secondary">
              {'Terms of Service'}
            </Link>{' '}
            and{' '}
            <Link href="#" color="text.secondary">
              {'Privacy Policy'}
            </Link>
            , confirm that you are 18 years of age or older.
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default SignUp;
