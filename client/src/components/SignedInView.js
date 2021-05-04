//modules
import { useLocation } from "react-router-dom";
import { useContext } from "react";

//contexts
import { UserContext } from "../contexts/UserContext";

//components
import Dashboard from "./Dashboard";
import Footer from "./Footer";

//hooks
import { useQuery } from "../hooks";
import AccountSetup from "./AccountSetup";

//SignedInView
function SignedInView() {
  const user = useContext(UserContext);
  const location = useLocation();
  const isNewUser = useQuery(location, "newuser");
  return (
    <div className="SignedInView">
      {isNewUser ? <AccountSetup user={user} /> : <Dashboard user={user} />}
      <Footer />
    </div>
  );
}

export default SignedInView;
