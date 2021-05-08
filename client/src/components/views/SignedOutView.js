//components
import SignIn from "../pages/SignIn";

//SignedOutView
function SignedOutView({ setUser }) {
  return (
    <>
      <SignIn setUser={setUser} />
    </>
  );
}

export default SignedOutView;
