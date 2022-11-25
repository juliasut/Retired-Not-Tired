import { TextField } from '@mui/material';

export default function FormTextField(props) {
  return (
    <TextField
    margin="normal"
    color="secondary"
    required
    fullWidth
    autoFocus
    sx={{ backgroundColor: '#fff', borderRadius: '5px' }}
    {...props}
    />
  );
}
