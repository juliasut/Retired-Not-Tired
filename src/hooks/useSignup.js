import { useState } from 'react';

import { authentication } from '../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(authentication, email, password)
      .then((res) => {
        console.log('User signed up', res.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  return { signup, error };
};

export default useSignup;
