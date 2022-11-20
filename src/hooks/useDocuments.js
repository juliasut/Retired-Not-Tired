import { database } from '../config/firebase';
import { useState, useEffect } from 'react';

// const fetchEvents = async () => {
//   const querySnapshot = await getDocs(collection(database, 'activities'));
//   return querySnapshot;
//   const querySnapshot = onSnapshot(
//     collection(database, 'activities'),
//     (snapshot) => {
//       console.log(snapshot);
//       let events = [];
//       snapshot.docs.forEach((doc) => {
//         console.log(doc);
//         events.push({ ...doc.data(), id: doc.id });
//         console.log(events);
//       });
//        return events;
//     }
//   );
//   return querySnapshot;
// };

export const useDocuments = (collection, id) => {
  const [document, setDocument] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const reference = database.collection(collection).doc(id);

    const unsubscribe = reference.onSnapshot(
      (snapshot) => {
        setDocument({ ...snapshot.data(), id: snapshot.id });
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('Could not get the data from the collection');
      }
    );

    return () => unsubscribe();
  }, [collection, id]);

  return { document, error };
};

export default useDocuments;
