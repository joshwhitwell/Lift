//modules
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

//components
import SignedOutView from "./components/SignedOutView";
import SignedInView from "./components/SignedInView";
import NotFoundPage from "./components/NotFoundPage";
import Header from "./components/Header";

//configs
import { AuthStateChange } from "./configs/firebaseConfig";

//contexts
import { UserContext } from "./contexts/UserContext";

//styles
import "./styles/App.css";

//App
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = AuthStateChange(setUser);
    return () => unsubscribe();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            {user ? <SignedInView /> : <SignedOutView setUser={setUser} />}
          </Route>
          <Route path="*">
            <NotFoundPage />
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
