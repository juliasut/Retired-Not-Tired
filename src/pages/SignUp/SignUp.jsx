import { Grid, Box, Button, Link, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import { ReactComponent as BackgroundTop } from '../../assets/rectangleTop.svg';
import { ReactComponent as BackgroundBottom } from '../../assets/rectangleBottom.svg';
import { useState } from 'react';
import useSignup from '../../hooks/useSignup';
import UploadButtons from '../../components/UploadButton';
import BackGroundTop from '../../components/BackGroundTop';
import BackGroundBottom from '../../components/BackGroundBottom';
import FormTextField from '../../components/FormTextField';
import TermsAndConditionsDisclaimer from '../../components/TermsAndConditionsDisclaimer';
import PageTitleTypography from '../../components/PageTitleTypography';

const SignUp = () => {
  const { signup, isPending } = useSignup();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [profilepicError, setProfilepicError] = useState(null);
  const [displayName, setDisplayName] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const handleFileChange = (e) => {
    setProfilePic(null);
    const file = e.target.files[0];
    setProfilePic(e.target.files[0]);

    if (!file) {
      setProfilepicError('Please select a profile picture');
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
    console.log('Profile pic', profilePic);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName, profilePic);
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
 {/*dan-feat-firebase
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            label="Email"
            autoFocus
            sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            label="Create password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            type="password"
            sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            label="Confirm password"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            value={confirmPassword}
            type="password"
            sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
          />
          <TextField
            margin="normal"
            color="secondary"
            required
            fullWidth
            label="Display Name"
            onChange={(e) => {
              setDisplayName(e.target.value);
            }}
            value={displayName}
            autoComplete="display-name"
          />
          {/* //* Profile Picture */}
          <label>
            Profile Picture
            <TextField
              margin="normal"
              color="secondary"
              required
              fullWidth
              type="file"
              onChange={(e) => {
                handleFileChange(e);
              }}
              // label="Profile Picture"
              sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
            />
          </label>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            {profilepicError && (
              <Typography color="error">{profilepicError}</Typography>
            )}
            <Grid item xs>
              {!isPending && (
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
              )}
              {isPending && (
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
            </Button>*/}

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
