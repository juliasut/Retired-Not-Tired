import ActivityCard from './ActivityCard';

const ActivitiesList = ({ activities }) => {
  return (
    <div>
      {activities.length === 0 && <p>No Activities yet</p>}
      {activities.map((activity) => (
        <ActivityCard activity={activity} key={activity.id} />
      ))}
    </div>
  );
};
export default ActivitiesList;
