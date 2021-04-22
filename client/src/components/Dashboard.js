//modules
import { useContext } from "react";
import firebase from "firebase/app";

//contexts
import { UserContext } from "../contexts/UserContext";

//styles
import "../styles/Dashboard.css";

//Dashboard
function Dashboard() {
  const user = useContext(UserContext);

  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  return (
    <div className="Dashboard">
      <p>Welcome {user?.displayName}</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
}

export default Dashboard;
