import { useCollection } from '../../hooks/useCollection';
const Friends = () => {
  const { documents, error } = useCollection('users');

  return (
    <div>
      <h1>Friends Page</h1>
      <p>Friends page body content</p>
      {error && <p>{error}</p>}
      {documents &&
        documents.map((doc) => (
          <div key={doc.id}>
            <h2>{doc.displayName}</h2>
            <p>{doc.online ? 'Yes' : 'no'}</p>
            <img src={doc.photoURL} alt="" />
          </div>
        ))}
    </div>
  );
};

export default Friends;
