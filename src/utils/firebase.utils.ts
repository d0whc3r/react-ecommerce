import firebase, { User } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { ShopCollection, ShopCollectionCategories, ShopCollectionFirestore } from '../redux/shop/shop.types';
import { DbUser } from '.';
import QuerySnapshot = firebase.firestore.QuerySnapshot;

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

export async function createUserProfileDocument(userAuth: User | null, additionalData?: any) {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`${DbUser}/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
}

export async function addCollectionAndDocuments(collectionKey: string, objToAdd: Partial<ShopCollection>[]) {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
}

export function convertCollectionsSnapshotToMap(collections: QuerySnapshot<ShopCollectionFirestore>) {
  const transformed: ShopCollection[] = collections.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformed.reduce((a, x) => {
    a[x.title.toLowerCase()] = x;
    return a;
  }, {} as ShopCollectionCategories);
}

export { QuerySnapshot };
export default firebase;
