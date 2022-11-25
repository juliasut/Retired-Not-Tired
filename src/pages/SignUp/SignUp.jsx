import { Grid, Box, Button, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import UploadButtons from '../../components/UploadButton';
import BackGroundTop from '../../components/BackGroundTop';
import BackGroundBottom from '../../components/BackGroundBottom';
import FormTextField from '../../components/FormTextField';
import TermsAndConditionsDisclaimer from '../../components/TermsAndConditionsDisclaimer';
import PageTitleTypography from '../../components/PageTitleTypography';

const SignUp = () => {
  const navigate = useNavigate();
  const { signup, isPending } = useSignup();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilepicError, setProfilepicError] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    setProfilePic(null);
    console.log(e.target.files[0]);
    const file = e.target.files[0];

    if (!file) {
      setProfilepicError('Please select a profile picture');
      console.log(profilepicError);
      return;
    }

    if (!file.type.includes('image')) {
      setProfilepicError('Please select a valid image');
      return;
    }

    if (file.size > 1000000) {
      setProfilepicError('Please select a file smaller than 1MB');
      return;
    }

    setProfilepicError(null);
    setProfilePic(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, profilePic);
    setTimeout(() => {
      navigate('/'); //? Redirect to home page
    }, 2000);
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
          label="Username"
          autoComplete="given-name"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
        <FormTextField
          label="Email"
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <FormTextField
          label="Create password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <FormTextField
          label="Confirm password"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
        />
        <UploadButtons handleFileChange={handleFileChange} />
        {profilePic && <Typography>{profilePic.name}</Typography>}
        {profilepicError && (
          <Typography variant="body2" color="error">
            {profilepicError}
          </Typography>
        )}
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          marginY={3}
        >
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs>
              {!isPending && (
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    mt: 2,
                    mb: 2,
                    width: 140,
                  }}
                >
                  Sign Up
                </Button>
              )}
              {isPending && (
                <Button
                  type="submit"
                  variant="contained"
                  disableElevation
                  sx={{
                    mt: 2,
                    mb: 2,
                    width: 140,
                  }}
                >
                  Signing Up...
                </Button>
              )}
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
        </Grid>
      </Box>
      <BackGroundBottom />
    </Container>
  );
};

export default SignUp;
