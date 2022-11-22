import './profile.css';
import { useDocuments } from '../../hooks/useDocuments';

const Profile = ({ user }) => {
  const { document, error } = useDocuments('users', user.uid);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Profile Update Page</h1>
      {document && (
        <>
          <div className="online">online: {document.online ? 'yes' : 'no'}</div>
          <div>
            <img
              src={document.photoURL || 'https://via.placeholder.com/150'}
              alt="avatar"
            />
            <p>Name : {document.updates.name}</p>
            <p>Email : {user.email}</p>
            <p>DOB : {document.updates.dob}</p>
            <p>About me : {document.updates.bio}</p>
            <p>Street : {document.updates.street}</p>
            <p>City : {document.updates.city}</p>
            <p>State : {document.updates.state}</p>
            <p>Zip : {document.updates.zip}</p>
            <p>Activities : {document.updates.activities}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
