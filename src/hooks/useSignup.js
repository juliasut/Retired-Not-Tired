import { useState } from 'react';
import { authentication } from '../config/firebase';
import { useAuthContext } from './useAuthContext';

const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);
    try {
      //* Signup user
      const response = await authentication.createUserWithEmailAndPassword(
        email,
        password
      );

      if (!response) {
        throw new Error('Could not Sign you up');
      }

      //* Update user profile with display name
      await response.user.updateProfile({ displayName });

      //* Dispatch login action(change comment!!)
      dispatch({ type: 'LOGIN', payload: response.user });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.mesage);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { signup, error, isPending };
};

export default useSignup;
