import { database } from '../config/firebase';
import { useEffect, useRef, useState } from 'react';

export const useCollection = (collection, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);

  const orderBy = useRef(_orderBy).current;

  useEffect(() => {
    let reference = database.collection(collection);

    if (orderBy) {
      reference = reference.orderBy(...orderBy);
    }

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
  }, [collection, orderBy]);

  return { documents, error };
};
