import { Link } from 'react-router-dom';
const ActivitiesList = ({ activity }) => {
  return (
    <div>
      {activity.length === 0 && <p>No Activities yet</p>}
      {activity.map((doc) => (
        <Link to={`/activity-detail/${doc.id}`} key={doc.id}>
          <h2>{doc.title}</h2>
          <p>{doc.contact}</p>
        </Link>
      ))}
    </div>
  );
};
export default ActivitiesList;
