import { useState } from 'react';

import { authentication } from '../config/firebase';

const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = (email, password) => {
    setError(null);
    authentication
      .createUserWithEmailAndPassword(authentication, email, password)
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
