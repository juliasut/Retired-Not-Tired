import BackGroundLanding from '../../components/BackGroundLanding';
import { Typography, Button, Box } from '@mui/material';
import React from 'react';
import LandingPage from '../../assets/images/retired-not-tired-strike-through-flip-flop.png';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/system';
import { keyframes } from '@mui/system';

const appear = keyframes`
from {
  transform: scale(0.6);
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fromRight = keyframes`
from {
  transform: translateX(200%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const fromAbove = keyframes`
from {
  transform: translateY(-200%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

export default function Landing() {
  return (
    <Box
      component="main"
      sx={{
        backgroundColor: 'primary.light',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Stack
        gap={{ xs: 3, sm: 9, md: 14 }}
        p={4}
        sx={{ maxWidth: '500px', alignSelf: 'center' }}
      >
        <BackGroundLanding />
        <Typography
          variant="h1"
          align="center"
          sx={{ fontSize: '48px', fontWeight: '700', animation: `${fromAbove} 1.5s ease-in-out`, }}
        >
          Retired <br />
          Not Tired
        </Typography>
        <Typography variant="h6" align="center" sx={{animation: `${fromAbove} 1.1s ease-in-out`,}}>
          Connect and Help Members in Your Community Stay Active{' '}
        </Typography>
        <Box
          component="img"
          sx={{
            alignSelf: 'center',
            padding: '10px',
            width: '100%',
            borderRadius: '10px',
            backgroundColor: '#fafafa',
            maxHeight: '25%',
            animation: `${appear} 2s ease-in-out`,
          }}
          src={LandingPage}
          alt="Retirement Big Logo Flip Flop"
        />
        <Stack
          alignItems="flex-end"
          gap={{ xs: 2, sm: 3, md: 5 }}
          mt={{ xs: '25%', sm: '29%', md: 30 }}
        >
          <Button
            type="submit"
            variant="contained"
            disableElevation={true}
            sx={{
              width: 110,
              animation: `${fromRight} 1.1s ease-in-out`,
            }}
            to="/signup"
            component={Link}
          >
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '16px',
                textTransform: 'none',
              }}
            >
              Sign Up
            </Typography>
          </Button>
          <Button
            type="submit"
            variant="outlined"
            disableElevation={true}
            sx={{
              width: 110,
              borderWidth: '1.8px',
              borderColor: 'primary.dark',
              color: 'primary.dark',
              animation: `${fromRight} 1.5s ease-in-out`,
            }}
            to="/login"
            component={Link}
          >
            <Typography
              sx={{
                fontWeight: '700',
                fontSize: '16px',
                textTransform: 'none',
              }}
            >
              Log In
            </Typography>
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
