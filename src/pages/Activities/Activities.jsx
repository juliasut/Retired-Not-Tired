import { useCollection } from '../../hooks/useCollection';
import ActivitiesList from '../../components/ActivitiesList';

const Activities = () => {
  const { documents, error } = useCollection('activities');
  console.log(documents);
  return (
    <div>
      <h1>Activities</h1>
      <p>Activities page body content</p>
      {error && <p>{error}</p>}
      {documents && <ActivitiesList activities={documents} />}
    </div>
  );
};

export default Activities;
