import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithRedirect, 
    signInWithPopup, 
    GoogleAuthProvider 
} from 'firebase/auth';
import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCtg9QkZnXA4fW_bNpK16gfbBdIYfae-8Q",
    authDomain: "crwn-clothing-db-6d230.firebaseapp.com",
    projectId: "crwn-clothing-db-6d230",
    storageBucket: "crwn-clothing-db-6d230.appspot.com",
    messagingSenderId: "250452142929",
    appId: "1:250452142929:web:698599b39e9a3464c08170",
    measurementId: "G-3T1XLS11XS"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
  export const db = getFirestore();
  export const createUserFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (error) {
            console.log('Error creating Doc', error.message);
        }
    }

    return userDocRef;
  }