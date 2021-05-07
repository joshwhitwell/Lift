//modules
import { useContext } from "react";

//contexts
import { UserContext } from "../../contexts/UserContext";

//Profile
function Profile() {
  const user = useContext(UserContext);
  return (
    <div className="Profile">
      <h2>Profile</h2>
      <img src={user.photoUrl} alt={user.displayName} />
      <h3>{user.displayName}</h3>
    </div>
  );
}

export default Profile;
