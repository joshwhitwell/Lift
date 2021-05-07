//modules
import { useContext } from "react";

//contexts
import { UserContext } from "../contexts/UserContext";

//components
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import AccountSetup from "./AccountSetup";

//SignedInView
function SignedInView() {
  const user = useContext(UserContext);
  return (
    <div className="SignedInView">
      {user.isNewUser ? (
        <AccountSetup user={user} />
      ) : (
        <Dashboard user={user} />
      )}
      <Footer />
    </div>
  );
}

export default SignedInView;
