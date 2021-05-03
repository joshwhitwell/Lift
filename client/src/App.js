//modules
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Dashboard from "./components/Dashboard";

//configs
import { AuthStateChange } from "./configs/firebaseConfig";
import { UserContext } from "./contexts/UserContext";

//styles
import "./styles/App.css";
import PublicHomePage from "./components/PublicHomePage";
import NotFoundPage from "./components/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";

//App
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = AuthStateChange(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <UserContext.Provider value={user}>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <PublicHomePage />
            </Route>
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route path="*">
              <NotFoundPage />
            </Route>
          </Switch>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
