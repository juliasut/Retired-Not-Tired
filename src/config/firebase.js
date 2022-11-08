import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCTUdmauc2ooohHRRQ8kXQsAji2gLQnc-I',
  authDomain: 'retired-not-tired.firebaseapp.com',
  projectId: 'retired-not-tired',
  storageBucket: 'retired-not-tired.appspot.com',
  messagingSenderId: '101143551119',
  appId: '1:101143551119:web:e880854c99a92c1a0ba4fa',
};

//* Initialize firebase
initializeApp(firebaseConfig);

//* Initialize firestore
const database = getFirestore();

export { database };
