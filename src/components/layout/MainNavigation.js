import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h2 className={classes.logo}>
        <NavLink to="/quotes">Great Quotes</NavLink>
      </h2>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : null)}
              to="/quotes"
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? classes.active : null)}
              to="/new-quote"
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
