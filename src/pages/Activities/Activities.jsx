import { useCollection } from '../../hooks/useCollection';
import ActivitiesList from '../../components/ActivitiesList';

const Activities = () => {
  const { documents, error } = useCollection('activities');

  return (
    <div>
      <h1>Activities</h1>
      <p>Activities page body content</p>
      {error && <p>{error}</p>}
      {documents && <ActivitiesList activity={documents} />}
    </div>
  );
};

export default Activities;
