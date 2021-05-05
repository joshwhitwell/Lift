//modules
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";

//configs
import { uiConfig } from "../configs/firebaseConfig";

//SignIn
function SignIn({ setUser }) {
  const signInSuccessWithAuthResult = (authResult, redirectUrl) => {
    const { isNewUser } = authResult.additionalUserInfo;
    setUser({ isNewUser });
    return false;
  };

  const uiConfigWithHook = {
    ...uiConfig,
    callbacks: { signInSuccessWithAuthResult },
  };

  return (
    <StyledFirebaseAuth
      uiConfig={uiConfigWithHook}
      firebaseAuth={firebase.auth()}
    />
  );
}

export default SignIn;
