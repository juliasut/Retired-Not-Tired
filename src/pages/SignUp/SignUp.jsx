import { Grid, Box, Button, Link, Typography, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { ReactComponent as BackgroundTop } from '../../assets/rectangleTop.svg';
import { ReactComponent as BackgroundBottom } from '../../assets/rectangleBottom.svg';

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
      <Container component="main" maxWidth="xs">
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
        <Typography
          component="h1"
          variant="h5"
          align="center"
          sx={{ mt: 10, mb: 1 }}
        >
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="firstName"
            label="First Name"
            name="firstName"
            autoComplete="given-name"
            autoFocus
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="family-name"
            autoFocus
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            id="postalCode"
            label="Zip/postal"
            name="postalCode"
            autoComplete="postal-code"
            autoFocus
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
          />
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
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
        </Box>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          sx={{ mt: 2 }}
        >
          {'By logging in or signing up, you agree to Retired Not Tired '}
          <Link href="#" variant="body2" color="text.secondary">
            {'Terms of Service'}
          </Link>{' '}
          and{' '}
          <Link href="#" variant="body2" color="text.secondary">
            {'Privacy Policy'}
          </Link>
          , confirm that you are 18 years of age or older.
        </Typography>
      </Container>
    </>
  );
};

export default SignUp;
