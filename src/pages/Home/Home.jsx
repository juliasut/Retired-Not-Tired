import { database } from '../../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';

const Home = () => {
  const [user, setUser] = useState(null);
  const ref = collection(database, 'user');

  useEffect(() => {
    const getUser = async () => {
      const snapshot = await getDocs(ref);
      let results = [];
      snapshot.docs.forEach((doc) => {
        results.push({ id: doc.id, ...doc.data() });
      });
      setUser(results);
    };
    getUser();
  }, []);

  return (
    <div>
      <h1>Retired Not Tired</h1>
      {user &&
        user.map((user) => (
          <div key={user.id}>
            {/* {console.log(user)} */}
            <h2>
              {user.firstName} <span>{user.lastName}</span>
            </h2>
            <p>{user.displayName}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
