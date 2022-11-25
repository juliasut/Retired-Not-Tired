import { useCollection } from '../../hooks/useCollection';
import ActivitiesList from '../../components/ActivitiesList';
import { CircularProgress, Stack, Typography, styled } from '@mui/material';
import Search from '../../components/Search';
import AddActivity from '../../components/AddActivity';
import PageTitleTypography from '../../components/PageTitleTypography';
import { useEffect, useState } from 'react';

const StyledCircularProgress = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.logoColor.main,
  size: 10,
  alignSelf: 'center',
}));

const Activities = () => {
  const { documents, error } = useCollection('activities');
  const [loading, setLoading] = useState(false);

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
      {loading && <StyledCircularProgress />}
      {documents && <ActivitiesList activities={documents} />}
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
