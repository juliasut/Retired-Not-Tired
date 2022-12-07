import { useEffect, useState } from 'react';
import { authentication, storage, database } from '../config/firebase';
import { useAuthContext } from './useAuthContext';
import { useDocuments } from '../hooks/useDocuments';

const useSignup = () => {
  const [cancelled, setCancelled] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  // eslint-disable-next-line no-unused-vars
  const { document: basicUser, err } = useDocuments('users', "1GQkdybI2WXlf3ABgqalyJCd4PU2");

  const signup = async (email, password, displayName, profilePic) => {
    setError(null);
    setIsPending(true);
    
    try {
    let response;
    try {
      //* Signup user
      response = await authentication.createUserWithEmailAndPassword(
        email,
        password
        );
        if (!response) {
          throw new Error('Could not Sign you up');
        }
      } catch (err) {
        console.log(err);
      } 
      
      //* upload user profile image
      const uploadPath = `thumbnails/${response.user.uid}/${profilePic.name}`;
      const image = await storage.ref(uploadPath).put(profilePic);
      const imageUrl = await image.ref.getDownloadURL();

      //* Update user profile with display name
      await response.user.updateProfile({ displayName, photoURL: imageUrl });

      //* Create a user document
      await database.collection('users').doc(response.user.uid).set({...basicUser,
        online: true,
        displayName,
        name: displayName,
        photoURL: imageUrl,
        bio: "I'm an explorer"
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
        setError(err);
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
