import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { Grid, Box, Button, Link, Typography, TextField } from '@mui/material';
import Container from '@mui/material/Container';
import BackGroundTop from '../../components/BackGroundTop';
import BackGroundBottom from '../../components/BackGroundBottom';
import FormTextField from '../../components/FormTextField';
import TermsAndConditionsDisclaimer from '../../components/TermsAndConditionsDisclaimer';
import PageTitleTypography from '../../components/PageTitleTypography';

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
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
          disabled={isPending}
        >
          Log In
        </Button>
      </Box>

      <BackGroundTop />

      {/* //! Will need to bee removed, check with team */}
      {/* <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 35 }}>
        <PageTitleTypography>Log in</PageTitleTypography>
        <FormTextField
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
        />
        <FormTextField
          name="password"
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
          marginY={3}
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
                {'Sign Up'}
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <TermsAndConditionsDisclaimer />
      </Box> */}
      <BackGroundBottom />
    </Container>
  );
};

export default Login;
