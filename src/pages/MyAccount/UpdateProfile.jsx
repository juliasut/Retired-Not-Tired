// import './updateProfile.css';
import { useFirestore } from '../../hooks/useFirestore';
import { useDocuments } from '../../hooks/useDocuments';
import { useState, useEffect } from 'react';
import { Box, Button, TextField, Avatar, Stack } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Container from '@mui/material/Container';
import PageTitleTypography from '../../components/PageTitleTypography';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import theme from '../../theme';
import datejs from 'dayjs';

const Profile = ({ user }) => {
  const { updateDocument, response } = useFirestore('users');
  const { document, error } = useDocuments('users', user.uid);

  const [name, setName] = useState();
  const [email, setEmail] = useState(user.email);
  const [value, setValue] = useState(datejs());
  const [dob, setDob] = useState('');
  const [bio, setBio] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [activities, setActivities] = useState([]);
  const [messages, setMessages] = useState([]);

  const handleChange = (newValue) => {
    setValue(newValue);
    setDob(value.locale('en-US').format('DD/MM/YYYY'));
    console.warn(dob);
  };

  const handleUpdate = async (e) => {
    setDob(e);
    e.preventDefault();
    console.log(name, email, dob, bio, street, city, state, zip);

    await updateDocument(user.uid, {
      name,
      dob,
      bio,
      street,
      city,
      state,
      zip,
      activities,
      messages,
    });

    if (!response.error) {
      setName('');
      setEmail('');
      setDob('');
      setBio('');
      setStreet('');
      setCity('');
      setState('');
      setZip('');
    }
  };

  useEffect(() => {
    if (!document) {
      setName('');
      setDob('');
      setBio('');
      setStreet('');
      setCity('');
      setState('');
      setZip('');
    } else {
      setName(document.name);
      setDob(document.dob);
      setBio(document.bio);
      setStreet(document.street);
      setCity(document.city);
      setState(document.state);
      setZip(document.zip);
    }
  }, [document]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ minHeight: '100vh', paddingBottom: '60px' }}
    >
      {document && (
        <Box
          component="form"
          onSubmit={handleUpdate}
          noValidate
          sx={{
            display: 'flex',
            flexDirection: 'column',
            p: '20px',
            gap: { xs: 2, sm: 3, md: 4 },
          }}
        >
          <PageTitleTypography>Update Profile</PageTitleTypography>
          <Avatar
            src={document.photoURL || 'https://via.placeholder.com/150'}
            sx={{
              alignSelf: 'center',
              height: '95px',
              width: '95px',
              backgroundColor: 'primary.light',
            }}
          ></Avatar>
          <IconButton
            // onChange={(e) => console.log(e)}
            aria-label="upload picture"
            component="label"
          >
            <input hidden accept="image/*" type="file" />
            <PhotoCamera
              sx={{
                height: '30px',
                width: '30px',
                color: 'logoColor.dark',
                position: 'relative',
                transform: 'translate(0, -35px)',
                borderRadius: '50%',
                backgroundColor: 'white',
                p: '5px',
              }}
            />
          </IconButton>
          <TextField
            id="name"
            label="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            size="small"
          />
          <TextField
            id="email"
            label="Email"
            // onChange={(e) => setEmail(e.target.value)}
            value={email}
            InputProps={{
              readOnly: true,
            }}
            size="small"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="DOB"
              value={dob}
              onChange={handleChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
          {/* <label>Activities:</label>
        <input type="array" name="activities" /> */}
          <TextField
            id="bio"
            label="Bio"
            multiline
            maxRows={4}
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            inputProps={{ style: { color: theme.palette.logoColor.dark } }}
          />
          <TextField
            id="street"
            label="Street"
            onChange={(e) => setStreet(e.target.value)}
            value={street}
            size="small"
          />
          <TextField
            id="city"
            label="City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
            size="small"
          />
          <Stack direction="row" gap={2}>
            <TextField
              id="state"
              label="State"
              onChange={(e) => setState(e.target.value)}
              value={state}
              size="small"
            />
            <TextField
              id="zip"
              label="Zip"
              onChange={(e) => setZip(e.target.value)}
              value={zip}
              size="small"
            />
          </Stack>
          <Button type="submit" variant="contained" disableElevation fullWidth>
            Update
          </Button>
        </Box>
      )}
    </Container>
  );
};

export default Profile;
