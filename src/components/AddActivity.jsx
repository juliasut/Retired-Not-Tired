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
  // eslint-disable-next-line no-unused-vars
  const [comments, setComments] = useState([]);

  const closeModal = () => {
    setDialog(false);
    setTitle('');
    setLocation('');
    setDate('');
    setTime('');
    setContact('');
    setContactNumber('');
    setDescription('');
  };

  const handleChange = (newValue) => {
    setValue(newValue);
    setTime(value.locale('en-US').format('LT'));
    setDate(value.locale('en-US').format('DD/MM/YYYY'));
  };

  const activity = {
    uid: user.uid,
    title,
    location: location.replaceAll(', ', ' '),
    date,
    time,
    contact,
    contactNumber,
    description,
    comments,
  };

  async function handleCloseDialog() {
    await addDocument(activity);
    (await response.error) ? console.log('error') : setDialog(false);
  }

  if (response.error) {
    console.log(response.error);

    return (
      <div>
        <h1>Something went wrong</h1>
      </div>
    );
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Dialog open={dialog} hideBackdrop maxWidth={"xs"}  sx={{
      "& .MuiDialog-container": {
        "& .MuiPaper-root": {
          width: "380px",
        },
      },
      backgroundColor: 'transparent',
    }}>
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
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            fullWidth
            required
          />
          <MobileDatePicker
            label="When?"
            inputFormat="MM/DD/YYYY"
            onChange={handleChange}
            value={value}
            renderInput={(params) => <TextField margin="dense" {...params} />}
          />
          <TimePicker
            label="At what time?"
            onChange={handleChange}
            value={value}
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
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={handleCloseDialog}>Share</Button>
        </DialogActions>
      </Dialog>
      <Button
        onClick={() => setDialog(true)}
        variant="contained"
        disableElevation={true}
        fullWidth
        sx={{
          mt: 2,
          mb: 2,
          alignSelf: 'center',
          borderRadius: '8px',
          height: '42px',
          // [theme.breakpoints.up('sm')]: {
          //   width: '300px',
          // },
        }}
      >
        Share an Activity
      </Button>
    </LocalizationProvider>
  );
}

export default AddActivity;
