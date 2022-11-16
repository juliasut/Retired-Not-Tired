import { useEffect, useState } from 'react';
import { authentication, storage, database } from '../config/firebase';
import { useAuthContext } from './useAuthContext';

const useSignup = () => {
  const [cancelled, setCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName, profilePic) => {
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

      //* upload user profile image
      const uploadPath = `thumbnails/${response.user.uid}/${profilePic.name}`;
      const image = await storage.ref(uploadPath).put(profilePic);
      const imageUrl = await image.ref.getDownloadURL();

      //* Update user profile with display name
      await response.user.updateProfile({ displayName, photoURL: imageUrl });

      //* Create a user document
      await database.collection('users').doc(response.user.uid).set({
        online: true,
        displayName,
        photoURL: imageUrl,
      });

      //* Dispatch login action(change comment!!)
      dispatch({ type: 'LOGIN', payload: response.user });

      //* Set State
      if (!cancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (err) {
      if (!cancelled) {
        console.log(err.mesage);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    setCancelled(false);
    return () => setCancelled(true);
  }, []);

  return { signup, error, isPending };
};

export default useSignup;
