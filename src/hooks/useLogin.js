import { useState } from 'react';
import { authentication } from '../config/firebase';

export const useLogin = () => {
  const [error, setError] = useState(null);

  const login = (email, password) => {
    setError(null);
    authentication
      .signInWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        console.log('User loggedin ', res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { login, error };
};
