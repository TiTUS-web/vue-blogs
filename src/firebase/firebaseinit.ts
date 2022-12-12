import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIf8cZHsQW8Ka8IWKfMmiFIlN7ZfD4vCg',
  authDomain: 'vue-blogs-41080.firebaseapp.com',
  projectId: 'vue-blogs-41080',
  storageBucket: 'vue-blogs-41080.appspot.com',
  messagingSenderId: '424399345660',
  appId: '1:424399345660:web:ea28835ce10423d17f4479'
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();