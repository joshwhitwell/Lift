//modules
import { useContext } from "react";
import { Route, Switch } from "react-router";

//contexts
import { UserContext } from "../../contexts/UserContext";

//components
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import NotFoundPage from "../pages/NotFoundPage";

//SignedInView
function SignedInView() {
  const user = useContext(UserContext);
  return (
    <>
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
    </>
  );
}

export default SignedInView;
