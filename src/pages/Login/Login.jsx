import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { Grid, Box, Button, Link, Typography, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import { ReactComponent as BackgroundImage } from '../../assets/images/background.svg';

const Login = () => {
  const { login, isPending } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <Container component="main" maxWidth="xs">
      <BackgroundImage
        color="#988FAD"
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
        }}
      />
      <Typography
        component="h1"
        variant="h5"
        align="center"
        sx={{ mt: 40, mb: 2 }}
      >
        Log In
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <TextField
          margin="normal"
          required
          fullWidth
          label="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          label="Password"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          autoComplete="current-password"
        />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs>
            <Link
              href="#"
              variant="body2"
              color="text.secondary"
              underline="hover"
              sx={{ align: 'center' }}
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item xs>
            {!isPending && (
              <Button
                type="submit"
                variant="contained"
                disableElevation={true}
                sx={{ mt: 2, mb: 2, width: 140, backgroundColor: '#625b71' }}
              >
                Log In
              </Button>
            )}
            {isPending && (
              <Button
                variant="contained"
                disableElevation={true}
                sx={{ mt: 2, mb: 2, width: 140, backgroundColor: '#625b71' }}
              >
                Loading...
              </Button>
            )}
          </Grid>
          <Grid item>
            <Typography variant="body2" color="text.primary" align="center">
              {'Not a member yet? '}
              <Link href="/signup" variant="body2" color="text.primary">
                {'Sign up'}
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
        {
          'By logging in or signing up, you agree to Retired Not Tired Terms of Service and Privacy Policy, confirm that you are 18 years of age or older. '
        }
      </Typography>
    </Container>
  );
};

export default Login;
