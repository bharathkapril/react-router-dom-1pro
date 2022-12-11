import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <ul className="nav">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/user">User</Link>
      </li>
      <li>
        <Link to="/emoji">Emoji</Link>
      </li>
    </ul>
  );
};

export default NavBar;
