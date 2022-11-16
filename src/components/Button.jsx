import { Grid, Button } from "@mui/material";

export default function BasicButtons() {
  return (
    <Grid item xs>
      <Button
        onClick={() => {
          alert("clicked");
        }}
        type="submit"
        variant="contained"
        disableElevation={true}
        sx={{ mt: 2, mb: 2, width: 200, backgroundColor: "#625b71" }}
      >
        Share an activity
      </Button>
    </Grid>
  );
}
