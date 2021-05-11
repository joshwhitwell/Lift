//modules
import { useContext } from "react";

//contexts
import { UserContext } from "../../contexts/UserContext";

//styles
import "../../styles/Profile.scss";

//Profile
function Profile() {
  const user = useContext(UserContext);

  return (
    <div className="Profile">
      <div className="Profile__row">
        <p>Display Photo</p>
        <img
          src={user.photoUrl}
          alt={user.displayName}
          className="Profile__row__photo"
        />
      </div>
      <div className="Profile__row">
        <p>User Name</p>
        <p className="Profile__row__text__editable">{user.displayName}</p>
      </div>
      <div className="Profile__row">
        <p>Email</p>
        <p className="Profile__row__text__editable">{user.email}</p>
      </div>
      <div className="Profile__row">
        <p>Date of Birth</p>
        <p className="Profile__row__text__editable">Jan 22, 1994</p>
      </div>
      <div className="Profile__row">
        <p>Gender</p>
        <p className="Profile__row__text__editable">Male</p>
      </div>
      <div className="Profile__row">
        <p>Height</p>
        <p className="Profile__row__text__editable">5 ft, 11 in</p>
      </div>
      <div className="Profile__row">
        <p>Weight</p>
        <p className="Profile__row__text__editable">175 lbs</p>
      </div>
    </div>
  );
}

export default Profile;
