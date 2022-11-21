import './updateProfile.css';
import { useFirestore } from '../../hooks/useFirestore';
import { useDocuments } from '../../hooks/useDocuments';
import { useState, useRef } from 'react';

const Profile = ({ user }) => {
  const { updateDocument, response } = useFirestore('users');
  const { document, error } = useDocuments('users', user.uid);

  console.log({ document });

  const [name, setName] = useState(user && user.displayName);
  const [email, setEmail] = useState(user.email || '');
  const [dob, setDob] = useState(document && document.updates.dob);
  const [bio, setBio] = useState(document && document.updates.bio);
  const [street, setStreet] = useState(document && document.updates.street);
  const [city, setCity] = useState(document && document.updates.city);
  const [state, setState] = useState(document && document.updates.state);
  const [zip, setZip] = useState(document && document.updates.zip);
  const [activities, setActivities] = useState('');

  console.log({ street });

  const handleUpdate = async (e) => {
    e.preventDefault();

    const updates = {
      update: [name, email, dob, bio, street, city, state, zip, activities],
    };

    // await updateDocument(user.uid, {
    //   name,
    //   dob,
    //   bio,
    //   street,
    //   city,
    //   state,
    //   zip,
    //   activities,
    // });

    //   if (!response.error) {
    //     setName('');
    //     setEmail('');
    //     setDob('');
    //     setBio('');
    //     setStreet('');
    //     setCity('');
    //     setState('');
    //     setZip('');
    //     setActivities([]);
    //   }
  };
  console.log(user.displayName);
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
            {/* //todo figure this one out!! */}
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
            {/* <input type="text" name="address" onChange={(e) => handleUpdate(e.target.value)} value={}/> */}
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
