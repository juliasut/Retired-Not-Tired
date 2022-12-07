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
  const [usernameError, setUsernameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);

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
    if (!displayName.length) {
      setUsernameError(true);
    }
    if (!email.match('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$')) {
      setEmailError(true);
    }
    if (password.length < 6) {
      setPasswordError(true);
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError(true);
    }
    signup(email, password, displayName, profilePic);
    navigate('/update-profile');
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ display: 'flex', height: '100%' }}
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
          error={usernameError}
          onChange={(e) => {
            setDisplayName(e.target.value);
            setUsernameError(false);
          }}
          value={displayName}
        />
        <FormTextField
          label="Email"
          autoComplete="email"
          error={emailError}
          onChange={(e) => {
            setEmail(e.target.value);
            setEmailError(false);
          }}
          value={email}
        />
        <FormTextField
          label="Create password (6 char min)"
          type="password"
          autoComplete="current-password"
          error={passwordError}
          onChange={(e) => {
            setPassword(e.target.value);
            setPasswordError(false);
          }}
          value={password}
        />
        <FormTextField
          label="Confirm password"
          type="password"
          error={confirmPasswordError}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            setConfirmPasswordError(false);
          }}
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
