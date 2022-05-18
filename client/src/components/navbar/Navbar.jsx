import "./navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">GevrisBooking</span>
        </Link>
        {user ? (
          <div>
            <span>{user.username}</span>
            <span onClick={handleClick} className="logout">
              Logout
            </span>
          </div>
        ) : (
          <div className="navItems">
            <Link to="/login">
              <button className="navButtons">Login</button>
            </Link>
            <Link to="/register">
              <button className="navButtons">Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
