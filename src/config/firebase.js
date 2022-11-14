import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
};

//* Initialize firebase
firebase.initializeApp(firebaseConfig);

//* Initialize firestore
const database = firebase.firestore();

//* Initialize authentication
const authentication = firebase.auth();

//* Initialize storage
const storage = firebase.storage();

//* Timestamp
const timestamp = firebase.firestore.Timestamp;

export { database, authentication, timestamp, storage };
