import { useState } from 'react';
import { useLogin } from '../../hooks/useLogin';
import { useNavigate } from 'react-router-dom';
import { Grid, Box, Button, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import BackGroundTop from '../../components/BackGroundTop';
import BackGroundBottom from '../../components/BackGroundBottom';
import FormTextField from '../../components/FormTextField';
import TermsAndConditionsDisclaimer from '../../components/TermsAndConditionsDisclaimer';
import PageTitleTypography from '../../components/PageTitleTypography';

const Login = () => {
  const navigate = useNavigate();

  const { login, error, isPending } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
    navigate('/');
  };

  const passwordError = error?.message.includes('password') 
  const emailError = error?.message.includes('email')|| error?.message.includes('no user')

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: 'flex', height: '100%', alignItems: 'center' }}
    >
      <BackGroundTop />
      <Box component="form" onSubmit={handleSubmit} noValidate>
        <PageTitleTypography>Log in</PageTitleTypography>
        <FormTextField
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
          error={emailError}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
        />
        <FormTextField
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          error={passwordError}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
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
      </Box>
      <BackGroundBottom />
    </Container>
  );
};

export default Login;
