import { useState, useEffect } from 'react';
import { authentication } from '../config/firebase';
import { useAuthContext } from './useAuthContext';

export const useLogin = (email, password) => {
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);
  const { dispatch } = useAuthContext();

  //* Login user
  const login = async () => {
    setError(null);
    setIsPending(true);

    //* try to sign user in
    try {
      const response = await authentication.signInWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error('Could not sign you in');
      }

      //* dispatch login action
      await dispatch({ type: 'LOGIN', payload: response.user });

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
    setCancelled(false);
    return () => setCancelled(true);
  }, []);

  return { login, error, isPending };
};
