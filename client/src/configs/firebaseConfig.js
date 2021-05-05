//modules
import firebase from "firebase/app";
import "firebase/auth";

//env variables
const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTHDOMAIN,
  REACT_APP_FIREBASE_PROJECTID,
  REACT_APP_FIREBASE_STORAGEBUCKET,
  REACT_APP_FIREBASE_MESSAGEINGSENDERID,
  REACT_APP_FIREBASE_APPID,
  REACT_APP_FIREBASE_MEASUREMENTID,
} = process.env;

//firebase config
const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECTID,
  storageBucket: REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGEINGSENDERID,
  appId: REACT_APP_FIREBASE_APPID,
  measurementId: REACT_APP_FIREBASE_MEASUREMENTID,
};

//initializes firebase app instance
firebase.initializeApp(firebaseConfig);

//subscribes to firebase auth state changes in App
function AuthStateChange(setUser) {
  return firebase.auth().onAuthStateChanged(async (user) => {
    if (user) {
      const accessToken = await user.getIdToken();
      setUser((state) => {
        return {
          displayName: user.displayName,
          email: user.email,
          accessToken,
          emailVerified: user.emailVerified,
          isAnonymous: user.isAnonymous,
          metadata: user.metadata,
          phoneNumber: user.phoneNumber,
          photoUrl: user.photoURL,
          refreshToken: user.refreshToken,
          ...state,
        };
      });
    } else {
      setUser(null);
    }
  });
}

//firebase ui config
const uiConfig = {
  signInFlow: "popup",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};

export { firebaseConfig, uiConfig, AuthStateChange };
