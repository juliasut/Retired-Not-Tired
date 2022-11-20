import { database } from '../config/firebase';
import { useEffect, useState } from 'react';

export const useCollection = (collection) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    let reference = database.collection(collection);

    let unsubscribe = reference.onSnapshot(
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        //? Updates the state with the results and error state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError('Could not get the data from the collection');
      }
    );

    //? Unsubscribes from the collection when the component unmounts
    return () => unsubscribe();
  }, [collection]);

  return { documents, error };
};
