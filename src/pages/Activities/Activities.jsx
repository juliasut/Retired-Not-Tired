import { useCollection } from '../../hooks/useCollection';
import { useDocuments } from '../../hooks/useDocuments';
import { useAuthContext } from '../../hooks/useAuthContext';
import ActivitiesList from '../../components/ActivitiesList';
import { CircularProgress, Stack, Typography, styled } from '@mui/material';
import Search from '../../components/Search';
import AddActivity from '../../components/AddActivity';
import PageTitleTypography from '../../components/PageTitleTypography';
import { useEffect, useState } from 'react';
import { database } from '../../config/firebase';

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.logoColor.main,
  size: 10,
  alignSelf: 'center',
}));

const Activities = () => {
  const { user } = useAuthContext();
  const [friends, setFriends] = useState(null);
  const [loading, setLoading] = useState(false);
  const { document: userActivities } = useDocuments('users', user.uid);
  const { documents, error } = useCollection('activities', [
    'createdAt',
    'desc',
  ]);

  //? This finds and replaces the users activities and replaces them with the activities from the firestore collection
  const newDocument = userActivities?.activities.map((act) => {
    return documents.find((doc) => doc.id === act.activity);
  });

  //? This finds the friends of the user and replaces the activities with the activities from the firestore collection
  useEffect(() => {
    setLoading(true);
    const unsubscribe = database.collection('users').onSnapshot(() => {
      let user = [];
      user.push({ ...userActivities, id: user.uid });
      setFriends(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [userActivities]);

  const handleChange = (value) => {
    console.log(value);
  };

  useEffect(() => {
    setLoading(true);
    if (documents) setLoading(false);
  }, [documents]);

  return (
    <Stack
      spacing={{ xs: 1, sm: 3, md: 4 }}
      minHeight="100vh"
      justifyContent="space-evenly"
      sx={{ p: '5px 20px 76px' }}
    >
      <PageTitleTypography>Activities</PageTitleTypography>
      <Search
        placeholder="Search for an activity"
        onChange={(e) => handleChange(e.target.value)}
      />
      <Typography
        variant="body1"
        fontWeight="700"
        color="primary.dark"
        sx={{ fontSize: '18px', pl: 2 }}
      >
        Hot and New Activities
      </Typography>
      {error && <p>{error}</p>}
      {loading && <StyledCircularProgress />}
      {documents && <ActivitiesList activities={documents} />}
      <Typography
        variant="body1"
        fontWeight="700"
        color="primary.dark"
        sx={{ fontSize: '18px', pl: 2 }}
      >
        My Activities
      </Typography>
      {error && <p>{error}</p>}
      {documents && <ActivitiesList activities={newDocument} />}
      {loading && <StyledCircularProgress />}
      <Typography
        variant="body1"
        fontWeight="700"
        color="primary.dark"
        sx={{ fontSize: '18px', pl: 2 }}
      >
        My Friends Activities
      </Typography>
      {error && <p>{error}</p>}
      {loading && <StyledCircularProgress />}
      {documents && <ActivitiesList activities={documents} />}
      <AddActivity />
    </Stack>
  );
};

export default Activities;
