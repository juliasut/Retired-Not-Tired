import { Button } from '@mui/material';

export default function BasicButtons(props) {
  return (
    <Button
      variant="contained"
      disableElevation={true}
      sx={{ mt: 2, mb: 2, backgroundColor: '#625b71', }}
      {...props}
    />
  );
}
