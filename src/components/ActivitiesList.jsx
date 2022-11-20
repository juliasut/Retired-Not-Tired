import { Link } from 'react-router-dom';
import ActivityCard from './ActivityCard';

const ActivitiesList = ({ activity }) => {
  return (
    <div>
      {activity.length === 0 && <p>No Activities yet</p>}
      {activity.map((doc) => (
        <Link to={`/activity-detail/${doc.id}`} key={doc.id}>
          <ActivityCard activity={doc} key={doc.id} />
        </Link>
      ))}
    </div>
  );
};
export default ActivitiesList;
