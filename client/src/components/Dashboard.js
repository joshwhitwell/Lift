//modules
import firebase from "firebase/app";

//styles
import "../styles/Dashboard.css";

//Dashboard
function Dashboard({ user }) {
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
