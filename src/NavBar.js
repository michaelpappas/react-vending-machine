import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/chips">
        Chips
      </NavLink>
      <NavLink to="/soda">
        Soda
      </NavLink>
      <NavLink to="/sardines">
        Sardines
      </NavLink>
    </nav>
  );
}

export default NavBar;