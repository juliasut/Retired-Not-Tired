import './updateProfile.css';
import { useFirestore } from '../../hooks/useFirestore';
import { useDocuments } from '../../hooks/useDocuments';
import { useState, useEffect } from 'react';

const Profile = ({ user }) => {
  const { updateDocument, response } = useFirestore('users');
  const { document, error } = useDocuments('users', user.uid);

  const [name, setName] = useState();
  const [email, setEmail] = useState(user.email);
  const [dob, setDob] = useState('');
  const [bio, setBio] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [activities, setActivities] = useState([]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await updateDocument(user.uid, {
      name,
      dob,
      bio,
      street,
      city,
      state,
      zip,
      activities,
    });

    if (!response.error) {
      setName('');
      setEmail('');
      setDob('');
      setBio('');
      setStreet('');
      setCity('');
      setState('');
      setZip('');
    }
  };

  useEffect(() => {
    if (!document) {
      setName('');
      setDob('');
      setBio('');
      setStreet('');
      setCity('');
      setState('');
      setZip('');
    } else {
      setName(document.name);
      setDob(document.dob);
      setBio(document.bio);
      setStreet(document.street);
      setCity(document.city);
      setState(document.state);
      setZip(document.zip);
    }
  }, [document]);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Profile Update Page</h1>
      {document && (
        <>
          <h3>Change only what you want to update</h3>
          <form onSubmit={handleUpdate}>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>DOB:</label>
            <input
              type="date"
              name="dob"
              onChange={(e) => setDob(e.target.value)}
              value={dob}
            />
            {/* <label>Activities:</label>
        <input type="array" name="activities" /> */}
            <label>About you:</label>
            <textarea
              type="text"
              name="bio"
              onChange={(e) => setBio(e.target.value)}
              value={bio}
            ></textarea>
            <label>Address:</label>
            <label>Street:</label>
            <input
              type="text"
              name="street"
              onChange={(e) => setStreet(e.target.value)}
              value={street}
            />
            <label>City:</label>
            <input
              type="text"
              name="city"
              onChange={(e) => setCity(e.target.value)}
              value={city}
            />
            <label>State:</label>
            <input
              type="text"
              name="state"
              onChange={(e) => setState(e.target.value)}
              value={state}
            />
            <label>Zip:</label>
            <input
              type="text"
              name="zip"
              onChange={(e) => setZip(e.target.value)}
              value={zip}
            />
            <button>Update</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Profile;
