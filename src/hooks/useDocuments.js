import { database } from '../config/firebase';
import { useState, useEffect } from 'react';

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
