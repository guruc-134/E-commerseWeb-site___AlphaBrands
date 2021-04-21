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

export const createUserProfile = async (userAuth, additionalData) =>
{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists)
    {
        const {displayName, email} = userAuth
        const createdAt = new Date();

        try
        {
            await userRef.set(
                {
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                }
            );
        }
        catch (err)
        {
            console.log('error creating user',err.message)
        }
    }
    return userRef 
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;