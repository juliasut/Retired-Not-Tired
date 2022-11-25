import { useCollection } from '../../hooks/useCollection';
import { useDocuments } from '../../hooks/useDocuments';
import { useAuthContext } from '../../hooks/useAuthContext';
import ActivitiesList from '../../components/ActivitiesList';
import { Stack, Typography } from '@mui/material';
import Search from '../../components/Search';
import AddActivity from '../../components/AddActivity';
import PageTitleTypography from '../../components/PageTitleTypography';

const Activities = () => {
  const { user } = useAuthContext();
  const { documents, error } = useCollection('activities');
  const { document: userActivities } = useDocuments('users', user.uid);

  const newDocument = userActivities?.activities.map((act) => {
    return documents.find((doc) => doc.id === act.activity);
  });

  const handleChange = (value) => {
    console.log(value);
  };

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
      <Typography
        variant="body1"
        fontWeight="700"
        color="primary.dark"
        sx={{ fontSize: '18px', pl: 2 }}
      >
        My Friends Activities
      </Typography>
      {error && <p>{error}</p>}
      {documents && <ActivitiesList activities={documents} />}
      <AddActivity />
    </Stack>
  );
};

export default Activities;
