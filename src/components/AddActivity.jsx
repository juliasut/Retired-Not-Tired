import { useState } from 'react';
import { useAuthContext } from '../hooks/useAuthContext';
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
import { useFirestore } from '../hooks/useFirestore';

function AddActivity() {
  const { user } = useAuthContext();
  const { addDocument, response } = useFirestore('activities');
  const [dialog, setDialog] = useState(false);
  const [value, setValue] = useState(dayjs());
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contact, setContact] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [description, setDescription] = useState('');
  const [comments, setComments] = useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const activity = {
    uid: user.uid,
    title,
    location,
    date,
    time,
    contact,
    contactNumber,
    description,
    comments,
    value,
  };

  async function handleCloseDialog() {
    // await addDocument(activity);
    console.log(activity);

    await setDialog(false);
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
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            name="location"
            label="Where?"
            onChange={handleChange}
            value={location}
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
            onChange={(e) => handleChange(e.target.value)}
            renderInput={(params) => <TextField margin="dense" {...params} />}
          />
          <TextField
            margin="dense"
            name="organizer"
            label="Who is organizing?"
            onChange={(e) => setContact(e.target.value)}
            value={contact}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            name="organizer"
            label="What's their number?"
            onChange={(e) => setContactNumber(e.target.value)}
            value={contactNumber}
            fullWidth
            required
          />
          <TextField
            margin="dense"
            name="description"
            label="Tell us the details too.."
            onChange={(e) => setDescription(e.target.value)}
            value={description}
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
        sx={{
          mt: 2,
          mb: 2,
          width: 300,
          backgroundColor: '#625b71',
          '&:hover': { backgroundColor: '#988fad' },
        }}
      >
        Share an Activity
      </Button>
    </LocalizationProvider>
  );
}

export default AddActivity;
