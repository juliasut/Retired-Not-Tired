import ActivityCard from './ActivityCard';
import "./activities-list.css"

const ActivitiesList = ({ activities }) => {
  return (
    <div className='media-scroller'>
      {activities.length === 0 && <p>No Activities yet</p>}
      {activities.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} />
      ))}
      </div>
  );
};
export default ActivitiesList;
