import { authentication } from '../config/firebase';
import { signOut } from 'firebase/auth';

export const Logout = () => {
  const logout = () => {
    signOut(authentication)
      .then((res) => {
        console.log('User signed out', res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { logout };
};
export default Logout;
