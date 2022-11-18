import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function BasicButtons() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('create-activity');
  };

  return (
    <Grid item xs>
      <Button
        onClick={handleClick}
        type="submit"
        variant="contained"
        disableElevation={true}
        sx={{ mt: 2, mb: 2, width: 200, backgroundColor: '#625b71' }}
      >
        Share an activity
      </Button>
    </Grid>
  );
}
