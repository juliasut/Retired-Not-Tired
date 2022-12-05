import ActivityCard from './ActivityCard';
import './activities-list.css';

const ActivitiesList = ({ activities, color }) => {
  return (
    <div className="media-scroller">
      {activities && activities.length === 0 && <div>No Activities yet</div>}
      {activities &&
        activities.map((activity) => (
          <ActivityCard activity={activity} key={activity.id} color={color} />
        ))}
    </div>
  );
};
export default ActivitiesList;
