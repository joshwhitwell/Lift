//components
import SignIn from "./SignIn";

//SignedOutView
function SignedOutView({ setUser }) {
  return (
    <div className="SignedOutView">
      <SignIn setUser={setUser} />
    </div>
  );
}

export default SignedOutView;
