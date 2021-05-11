//modules
import { useContext } from "react";
import { Route, Switch, useLocation } from "react-router";

//contexts
import { UserContext } from "../../contexts/UserContext";

//components
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFoundPage from "../pages/NotFoundPage";
import Header from "../layout/PrivateHeader";
import Footer from "../layout/PrivateFooter";

//SignedInView
function SignedInView() {
  const user = useContext(UserContext);
  let location = useLocation();

  return (
    <>
      <Header location={location} />
      <div className="Main">
        <Switch>
          <Route exact path="/">
            <Dashboard user={user} />
          </Route>
          <Route path="/profile">
            <Profile user={user} />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default SignedInView;
