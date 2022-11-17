import { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import Logo from '../assets/images/retired-not-tired-just-flip-flops.png';

function AddActivity() {
  const [dialog, setDialog] = useState(false);
  const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));
  const handleChange = (newValue) => {
    setValue(newValue);
  };

  function handleCloseDialog() {
    setDialog(false);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={dialog} onClose={handleCloseDialog}>
        <DialogTitle>
          <img src={Logo} alt="Retirement flip flop" height="45px" />
          Add Activity
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill up your activity details here and click "Share".
          </DialogContentText>
          <TextField
            margin="dense"
            name="activity-name"
            label="What is happening?"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            name="location"
            label="Where?"
            fullWidth
            required
          />
          <MobileDatePicker
            label="When?"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField margin="dense" {...params} />}
          />
          <TimePicker
            label="At what time?"
            value={value}
            onChange={handleChange}
            renderInput={(params) => <TextField margin="dense" {...params} />}
          />
          <TextField
            margin="dense"
            name="organizer"
            label="Who is organizing?"
            fullWidth
            required
          />
          <TextField
            margin="dense"
            name="description"
            label="Tell us the details too.."
            fullWidth
            required
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Share</Button>
        </DialogActions>
      </Dialog>
      <Button
        onClick={() => setDialog(true)}
        variant="contained"
        disableElevation={true}
        sx={{ mt: 2, mb: 2, width: 200, backgroundColor: '#625b71' }}
      >
        Add Activity
      </Button>
    </LocalizationProvider>
  );
}

export default AddActivity;
