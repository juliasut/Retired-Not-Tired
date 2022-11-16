import { useState, useEffect } from 'react';
import { database } from '../config/firebase';

const useActivities = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  const createActivity = async (activity) => {
    setError(null);
    setIsPending(true);
    try {
      const response = await database.collection('activities').add(activity);
      if (!response) {
        throw new Error('Could not create activity');
      }
      if (!cancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (err) {
      if (!cancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    setCancelled(false);
    return () => setCancelled(true);
  }, []);

  return { createActivity, error, isPending };
};

export default useActivities;
