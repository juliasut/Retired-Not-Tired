import './profile.css';
import { useDocuments } from '../../hooks/useDocuments';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';

const Profile = () => {
  const { user } = useAuthContext();
  const { document, error } = useDocuments('users', user.uid);

  console.log(document);

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
            <p>Name : {document.name}</p>
            <p>Email : {document.email}</p>
            <p>DOB : {document.dob}</p>
            <p>About me : {document.bio}</p>
            <p>Street : {document.street}</p>
            <p>City : {document.city}</p>
            <p>State : {document.state}</p>
            <p>Zip : {document.zip}</p>
            <h4>Activities I'm interested in 🤌 : </h4>
            <ul>
              {document.activities.map((interest) => (
                <>
                  <li key={interest.id}>
                    <Link to={`/activity-detail/${interest.activity}`}>
                      {interest.title}
                    </Link>
                  </li>
                </>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
