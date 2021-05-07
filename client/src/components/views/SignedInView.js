//modules
import { useContext } from "react";
import { Route, Switch } from "react-router";

//contexts
import { UserContext } from "../../contexts/UserContext";

//components
import Dashboard from "../pages/Dashboard";
import Footer from "../layout/Footer";
import Profile from "../pages/Profile";
import NotFoundPage from "../pages/NotFoundPage";

//SignedInView
function SignedInView() {
  const user = useContext(UserContext);
  return (
    <div className="SignedInView">
      <Switch>
        <Route path={"/profile"}>
          <Profile user={user} />
        </Route>
        <Route path={"/dashboard"}>
          <Dashboard user={user} />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default SignedInView;
