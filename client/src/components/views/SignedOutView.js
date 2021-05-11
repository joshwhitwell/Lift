//components
import PublicFooter from "../layout/PublicFooter";
import PublicHeader from "../layout/PublicHeader";
import SignIn from "../pages/SignIn";

//SignedOutView
function SignedOutView({ setUser }) {
  return (
    <>
      <PublicHeader />
      <SignIn setUser={setUser} />
      <PublicFooter />
    </>
  );
}

export default SignedOutView;
