import { useEffect, useState } from 'react';
import { authentication, database } from '../config/firebase';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [cancelled, setcanelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch, user } = useAuthContext();

  //* Logout user
  const logout = async () => {
    setError(null);
    setIsPending(true);

    //* try to sign user out and sets online status to offline
    try {
      const { uid } = user;
      await database.collection('users').doc(uid).update({ online: false });

      await authentication.signOut();

      //* dispatch logout action
      await dispatch({ type: 'LOGOUT' });

      //* set State
      if (!cancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!cancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  //* Cancel request to prevent an error in the console
  //*for the unmounted component
  useEffect(() => {
    setcanelled(false);
    return () => setcanelled(true);
  }, []);

  return { logout, error, isPending };
};
