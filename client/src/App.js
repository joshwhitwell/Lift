//modules
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

//configs
import { AuthStateChange } from "./configs/firebaseConfig";
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
    <Router>
      <UserContext.Provider value={user}>
        <div className="App">
          <Route exact path="/">
            {user ? <Dashboard /> : <SignIn />}
          </Route>
        </div>
      </UserContext.Provider>
    </Router>
  );
}

export default App;
