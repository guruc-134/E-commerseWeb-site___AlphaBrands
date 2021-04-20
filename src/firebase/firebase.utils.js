import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config  = {
    apiKey: "AIzaSyBAErFo6GUkR50Zp_GjtX2-t3lBMrNx9gQ",
    authDomain: "e-commerce-website-2880e.firebaseapp.com",
    projectId: "e-commerce-website-2880e",
    storageBucket: "e-commerce-website-2880e.appspot.com",
    messagingSenderId: "399521271788",
    appId: "1:399521271788:web:ee0e95be831cba94d23ac9",
    measurementId: "G-W8234BHDF9"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;