import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTj00F3_TtEi7fFd1E5-BPT_GKm3dA7VM',
  authDomain: 'e-commerce-react-4148d.firebaseapp.com',
  databaseURL: 'https://e-commerce-react-4148d.firebaseio.com',
  projectId: 'e-commerce-react-4148d',
  storageBucket: 'e-commerce-react-4148d.appspot.com',
  messagingSenderId: '524764092775',
  appId: '1:524764092775:web:5d98052ee8976437e9b7c2',
  measurementId: 'G-0N3P96HVQK'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
