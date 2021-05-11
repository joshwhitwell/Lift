//modules
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBars,
  faDumbbell,
  faChartLine,
} from "@fortawesome/free-solid-svg-icons";

//styles
import "../../styles/Footer.scss";

//Footer
function PrivateFooter() {
  return (
    <footer className="Footer">
      <nav className="Footer__Nav">
        <NavLink exact to="/" className="Footer__Nav__NavLink">
          <Icon icon={faHome} />
          <span>Home</span>
        </NavLink>
        <NavLink exact to="/workouts" className="Footer__Nav__NavLink">
          <Icon icon={faDumbbell} />
          <span>Workouts</span>
        </NavLink>
        <NavLink exact to="/progress" className="Footer__Nav__NavLink">
          <Icon icon={faChartLine} />
          <span>Progress</span>
        </NavLink>
        <NavLink exact to="/menu" className="Footer__Nav__NavLink">
          <Icon icon={faBars} />
          <span>Menu</span>
        </NavLink>
      </nav>
    </footer>
  );
}

export default PrivateFooter;
