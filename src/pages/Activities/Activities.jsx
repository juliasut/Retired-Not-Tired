import { useCollection } from '../../hooks/useCollection';

const Activities = () => {
  const { documents, error } = useCollection('activities');
  return (
    <div>
      <h1>Activities</h1>
      <p>Activities page body content</p>
      {error && <p>{error}</p>}
      {documents &&
        documents.map((doc) => (
          <div key={doc.id}>
            <h2>{doc.title}</h2>
            <p>{doc.location}</p>
          </div>
        ))}
    </div>
  );
};

export default Activities;
