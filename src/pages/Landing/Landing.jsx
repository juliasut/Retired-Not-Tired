import BackGroundTop from "../../components/BackGroundTop";
import BackGroundBottom from "../../components/BackGroundBottom";
import { Typography, Button, Container, Grid } from "@mui/material";
import React from "react";
import LandingPage from "../../assets/images/retired-not-tired-big-flip-flop.png";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Container component="main" maxWitdh="xs" className="containter">
      <BackGroundTop />
      <div>
        <Typography varient="h2" component="h1" align="center" gutterBottom>
          Retired Not Tired
        </Typography>
        <Typography varient="h3" conponent="h1" align="center" gutterBottom>
          Connect and Help Members in Your Community Stay Active
        </Typography>
      </div>
      <img className="landing-page" src={LandingPage} alt="Retirement Big Logo Flip Flop" />
      <Grid container direction="column" justifyContent="center" alignItems="center" marginY={3}>
        <Button
          type="submit"
          variant="contained"
          disableElevation={true}
          sx={{
            mt: 2,
            mb: 2,
            width: 140,
            backgroundColor: "#625b71",
            "&:hover": {
              backgroundColor: "#988fad",
            },
          }}
          to="/signup"
          component={Link}
        >
          Sign Up
        </Button>
        <Button
          type="submit"
          variant="contained"
          disableElevation={true}
          sx={{
            mt: 2,
            mb: 2,
            width: 140,
            backgroundColor: "#625b71",
            "&:hover": {
              backgroundColor: "#988fad",
            },
          }}
          to="/login"
          component={Link}
        >
          Log In
        </Button>
      </Grid>
      <BackGroundBottom />
    </Container>
  );
}
