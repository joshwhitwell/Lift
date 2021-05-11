//modules
import firebase from "firebase/app";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

//styles
import "../../styles/Header.scss";

//Header
function PrivateHeader({ location }) {
  const handleSignOut = () => {
    firebase.auth().signOut();
  };

  const parseTitle = () => {
    const pathString = location.pathname.split("/")[1];
    if (pathString.length) {
      const slice = pathString.split("");
      slice[0] = slice[0].toUpperCase();
      return slice.join("");
    }
    return "Home";
  };

  return (
    <header className="Header">
      <h2>{parseTitle()}</h2>
      <Icon icon={faSignOutAlt} onClick={handleSignOut} />
    </header>
  );
}

export default PrivateHeader;
