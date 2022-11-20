import { useCollection } from '../../hooks/useCollection';
import ActivityCard from '../../components/ActivityCard'

const Activities = () => {
  const { documents, error } = useCollection('activities');
  console.log(documents)
  return (
    <div>
      <h1>Activities</h1>
      <p>Activities page body content</p>
      {error && <p>{error}</p>}
      {/* {documents &&
        documents.map((doc) => (
          <div key={doc.id}>
            <h2>{doc.title}</h2>
            <p>{doc.location}</p>
          </div>
        ))} */}
      {documents && documents.map(doc => (
        <ActivityCard key={doc.id} title={doc.title} location={doc.location}
          description={doc.description} 
          contact={doc.contact}
        />
      ))}
    </div>
  );
};

export default Activities;
