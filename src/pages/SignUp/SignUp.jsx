import { Grid, Box, Button, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import UploadButtons from '../../components/UploadButton';
import BackGroundTop from '../../components/BackGroundTop';
import BackGroundBottom from '../../components/BackGroundBottom';
import FormTextField from '../../components/FormTextField';
import TermsAndConditionsDisclaimer from '../../components/TermsAndConditionsDisclaimer';
import PageTitleTypography from '../../components/PageTitleTypography';

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
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: 'flex', minHeight: '100vh' }}
    >
      <BackGroundTop />
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ alignSelf: 'center' }}
      >
        <PageTitleTypography>Sign Up</PageTitleTypography>
        <FormTextField
          id="userName"
          label="Username"
          name="userName"
          autoComplete="given-name"
        />
        <FormTextField
          id="email"
          label="Email"
          name="email"
          autoComplete="email"
        />
        <FormTextField
          name="password"
          label="Create password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <FormTextField
          name="confirm-password"
          label="Confirm password"
          type="password"
          id="confirm-password"
        />
        <UploadButtons />
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginY={3}
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
        <TermsAndConditionsDisclaimer />
      </Box>
      <BackGroundBottom />
    </Container>
  );
};

export default SignUp;
