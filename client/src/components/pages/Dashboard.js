//modules
import firebase from "firebase/app";

//styles
import "../../styles/Dashboard.scss";

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
