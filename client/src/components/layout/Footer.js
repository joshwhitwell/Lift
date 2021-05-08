//modules
import { NavLink } from "react-router-dom";

//styles
import "../../styles/Footer.scss";

//Footer
function Footer() {
  return (
    <footer className="Footer">
      <nav className="Footer__Nav">
        <NavLink exact to="/" className="Footer__Nav__NavLink">
          Home
        </NavLink>
        <NavLink exact to="/profile" className="Footer__Nav__NavLink">
          Profile
        </NavLink>
      </nav>
    </footer>
  );
}

export default Footer;
