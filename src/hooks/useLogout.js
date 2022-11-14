import { useEffect, useState } from 'react';
import { authentication } from '../config/firebase';
import { useAuthContext } from './useAuthContext';

export const useLogout = () => {
  const [cancelled, setcanelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch } = useAuthContext();

  //* Logout user
  const logout = async () => {
    setError(null);
    setIsPending(true);

    //* try to sign user out
    try {
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

  useEffect(() => {
    setcanelled(false);
    return () => setcanelled(true);
  }, []);

  return { logout, error, isPending };
};
