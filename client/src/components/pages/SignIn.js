//modules
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase/app";

//utils
import axiosWithAuth from "../../api/axios";

//configs
import { uiConfig } from "../../configs/firebaseConfig";

//SignIn
function SignIn() {
  const signInSuccessWithAuthResult = async (authResult, _redirectUrl) => {
    const { isNewUser } = authResult.additionalUserInfo;
    if (isNewUser) {
      try {
        const token = await authResult.user.getIdToken();
        await axiosWithAuth(token).post("/users");
      } catch (err) {
        console.log(err);
      }
    }
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
