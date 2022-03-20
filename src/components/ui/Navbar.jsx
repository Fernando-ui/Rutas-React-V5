import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";
import { ACTION } from "../../actions/actions";

export const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  const {
    user: { name },
  } = useContext(AuthContext);
  const handleLogout = () => {

    dispatch({ type: ACTION.LOGOUT });
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Asociaciones
      </Link>

      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/marvel"
          >
            Marvel
          </NavLink>

          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/dc"
          >
            DC
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/search"
          >
            Search
          </NavLink>
          <span
            className="nav-item nav-link text-info"
            style={{ color: "#fff" }}
          >
            {name}
          </span>
          <NavLink
            activeClassName="active"
            className="nav-item nav-link"
            exact
            to="/login"
            onClick={() => handleLogout()}
          >
            Logout
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};
