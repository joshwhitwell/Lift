//modules
import { useEffect, useState } from "react";
import firebase from "firebase/app";
import { Route } from "react-router-dom";

//components
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

//configs
import { AuthStateChange } from "./configs/firebaseConfig";
import { UserContext } from "./contexts/UserContext";

//App
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = AuthStateChange(setUser);
    return () => unsubscribe();
  }, []);

  const handleSignOut = (e) => {
    e.preventDefault();
    firebase.auth().signOut();
  };

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Route exact path="/">
          {user ? <Dashboard /> : <SignIn />}
        </Route>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </UserContext.Provider>
  );
}

export default App;
