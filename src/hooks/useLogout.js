import { authentication } from '../config/firebase';

export const Logout = () => {
  const logout = () => {
    authentication
      .signOut(authentication)
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
