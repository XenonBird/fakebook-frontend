import { NavLink } from "react-router-dom";

import Search from "../../icons/Search";
import User from "../../icons/User";
import Home from "../../icons/Home";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>Fakebook</h1>
      <nav>
        <ul>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "active" : "")}
              to="/app/search"
            >
              <Search />
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "active" : "")}
              to="/app/user"
            >
              <User />
            </NavLink>
          </li>
          <li>
            <NavLink className={(e) => (e.isActive ? "active" : "")} to="/app/">
              <Home />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
