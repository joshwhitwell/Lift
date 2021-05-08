//modules
import { useEffect, useState } from "react";

//components
import SignedOutView from "./components/views/SignedOutView";
import SignedInView from "./components/views/SignedInView";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import LoadingSpinner from "./components/views/LoadingSpinner";

//configs
import { AuthStateChange } from "./configs/firebaseConfig";

//contexts
import { UserContext } from "./contexts/UserContext";

//styles
import "./styles/App.scss";

//App
function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = AuthStateChange(setUser, setLoading);
    return () => unsubscribe();
  }, []);

  const renderViewMode = () => {
    return (
      <div className="Main">
        {loading ? (
          <LoadingSpinner />
        ) : user ? (
          <SignedInView />
        ) : (
          <SignedOutView setUser={setUser} />
        )}
      </div>
    );
  };

  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header />
        {renderViewMode()}
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;
